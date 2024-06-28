import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";
import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque ex
          labore dolorem modi totam sed eius dolorum, exercitationem ipsa
          obcaecati adipisci voluptatibus tempore alias porro iusto rerum,
          ratione itaque? Necessitatibus.
        </p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
