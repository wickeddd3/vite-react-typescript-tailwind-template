import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { listProductsThunk } from "@/store/slices/products";
import { Page } from "@/components/layouts/Page";
import { ProductsTable } from "@/pages/ecommerce/products/components/table/ProductsTable";
import { columns } from "@/pages/ecommerce/products/components/table/columns";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch: AppDispatch = useDispatch();

  const products = useSelector(
    (state: RootState) => state.productsSlice.products.data
  );

  useEffect(() => {
    dispatch(listProductsThunk());
  }, [dispatch]);

  return (
    <Page>
      <Page.Navbar>
        <Page.Breadcrumb />
      </Page.Navbar>
      <Page.Content>
        <div className="flex items-center justify-between py-2">
          <span className="text-xl font-bold text-gray-800">Products</span>
          <div className="flex items-center gap-2">
            {/* <CategorySearch />
            <AddCategoryButtonDialog /> */}
            <Button variant="outline" asChild>
              <Link to="/products/create">Add Product</Link>
            </Button>
          </div>
        </div>
        <ProductsTable data={products} columns={columns} />
      </Page.Content>
    </Page>
  );
};

export default Products;
