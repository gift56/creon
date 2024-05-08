import { tokenData } from "@/constant";

const Token = () => {
  return (
    <section id="token" className="bg-black py-14 lg:py-20">
      <div className="contain">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 items-start justify-start gap-6">
          {tokenData.map((item, index) => (
            <div></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Token;
