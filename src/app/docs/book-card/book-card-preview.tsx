import { BookCard } from "@/components/core/book-card";

const BookCardPreview = () => {
  return (
    <BookCard
      color="#ffb900"
      cover={
        <div className="w-full h-full bg-amber-400 text-2xl font-bold text-white">
          NAT GEO
        </div>
      }
      content={
        <div className="w-full h-full p-4">
          <p className="text-[8px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            modi cumque quaerat, ipsam ab commodi quia praesentium nostrum!
            Consequuntur quasi itaque quo ratione in aspernatur distinctio?
            Animi ratione illo vitae quis porro quae non iste maxime rerum id,
            minima eum veniam ullam incidunt, distinctio nostrum pariatur. Ex
            officiis dolorem qui?
          </p>
        </div>
      }
    />
  );
};

export default BookCardPreview;
