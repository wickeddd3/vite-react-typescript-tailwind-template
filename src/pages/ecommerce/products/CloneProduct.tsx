import { Page } from "@/components/layouts/Page";
import { ProductForm } from "@/pages/ecommerce/products/components/ProductForm";
import { ProductSchemaType } from "@/schema/product";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";
import {
  createProductThunk,
  getProductThunk,
  listCategoriesThunk,
} from "@/store/slices/products";
import { useNavigate, useParams } from "react-router-dom";

const CloneProduct = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  const categories = useSelector(
    (state: RootState) => state.productsSlice.optionCategories.data
  );
  const selectedProduct = useSelector(
    (state: RootState) => state.productsSlice.selectedProduct
  );

  const handleAddProduct = (values: ProductSchemaType) => {
    setLoading(true);
    dispatch(createProductThunk(values))
      .unwrap()
      .then(() => {
        toast({
          title: "Success",
          description: "Product created successfully",
        });
        setLoading(false);
        navigate("/products");
      })
      .catch((error) => {
        toast({
          title: "Creating product failed",
          description: error,
          variant: "destructive",
        });
        setLoading(false);
      });
  };

  useEffect(() => {
    dispatch(listCategoriesThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductThunk(Number(id)));
  }, [dispatch, id]);

  return (
    <Page>
      <Page.Navbar>
        <Page.Breadcrumb />
      </Page.Navbar>
      <Page.Content>
        <div className="flex items-center justify-between py-2">
          <span className="text-xl font-bold text-gray-800">Clone product</span>
        </div>
        <div className="h-full w-full md:w-6/12">
          <ProductForm
            onSubmit={handleAddProduct}
            loading={loading}
            categories={categories}
            value={selectedProduct}
            submitText="Create product"
          />
        </div>
      </Page.Content>
    </Page>
  );
};

export default CloneProduct;
