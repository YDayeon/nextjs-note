type TParams = {
  params: {
    slug: string;
  };
};

export default function PantsPage({ params }: TParams) {
  return <h1>{params.slug} 제품 설명~</h1>;
}
