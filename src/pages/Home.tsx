import React from "react";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategoryId,
  setCurrentPage,
  // setFilters,
} from "../redux/slices/filterSlice";
// import { SearchContext } from "../App.tsx";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";

import { fetchPizzas } from "../redux/slices/pizzaSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { items, status } = useSelector((state: any) => state.pizza);
  const { categoryId, sort, currentPage, searchValue } = useSelector(
    (state: any) => state.filter
  );

  // const { searchValue } = React.useContext(SearchContext);

  const onClickCategory = (idx: number) => {
    dispatch(setCategoryId(idx));
  };

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1));

  //     const sort = sortList.find(
  //       (obj) => obj.sortProperty === params.sortProperty
  //     );

  //     dispatch(
  //       setFilters({
  //         searchValue: params.search,
  //         categoryId: Number(params.category),
  //         currentPage: Number(params.currentPage),
  //         sort: sortObj || sortList[0],
  //       })
  //     );
  //   }
  // }, []);

  const getPizzas = async () => {
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortProperty.replace("-", "");

    const category = categoryId > 0 ? `category=${categoryId}` : "";
    // const search = searchValue ? `&search=${searchValue}` : "";
    const search = searchValue;

    dispatch(
      // @ts-ignore
      fetchPizzas({ order, sortBy, category, search, currentPage })
    );

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sort.sortProperty, currentPage, searchValue]);

  const pizzas = items.map((obj: any) => (
    <Link key={obj.id} to={`/pizza/${obj.id}`}>
      <PizzaBlock {...obj} />
    </Link>
  ));

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>
            К сожалению, не удалось получить пиццы. Попробуйте поторить попытку
            позже.
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzas}
        </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  );
};

export default Home;
