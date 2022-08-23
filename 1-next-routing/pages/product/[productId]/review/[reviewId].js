import { useRouter } from "next/router";

const ReviewDetail = () => {
  const router = useRouter();
  const { reviewId, productId } = router.query;

  return (
    <h1>
      Review id {reviewId} for product id {productId}
    </h1>
  );
};

export default ReviewDetail;
