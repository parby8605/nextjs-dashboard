import { Metadata } from "next";

//metadata 활용하여 페이지 타이틀 설정
export const metadata: Metadata = {
  title: "Customers",
};

export default function Page() {
  return <p>Customers Page</p>;
}
