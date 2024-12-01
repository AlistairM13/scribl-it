import { useForm } from "react-hook-form";

const Lobby = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-950">
      <h1 className="text-[#FFFF00] tracking-tight absolute top-[10%] font-semibold text-4xl">
        Scribl.it
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 flex rounded-md flex-col gap-4 bg-blue-50"
      >
        <h2 className="text-xl font-bold self-center">Join room</h2>
        <input
          {...register("name")}
          placeholder="Enter your name"
          className="px-4 py-2 placeholder:text-slate-400 bg-blue-200 rounded-md"
        />
        <input
          {...register("roomId")}
          placeholder="Enter the roomId"
          className="px-4 py-2 placeholder:text-slate-400 bg-blue-200 rounded-md"
        />
        <button className="px-4 py-2 bg-blue-950 hover:bg-blue-900 text-white rounded-md">
          Join
        </button>
      </form>
    </div>
  );
};

export default Lobby;
