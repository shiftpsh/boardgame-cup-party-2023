import { useGames } from "@/context/GamesContext";
import { TextField } from "@solved-ac/ui-react";

const EditFreeze = () => {
  const { freezeAt, setFreezeAt } = useGames();
  const timezoneOffset = new Date().getTimezoneOffset() * 60000;
  const freezeAtKst = new Date(freezeAt - timezoneOffset).toISOString();

  const handleFreezeDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    const time = freezeAtKst.split("T")[1].slice(0, 5);
    setFreezeAt(new Date(`${date}T${time}+09:00`).getTime());
  };

  const handleFreezeTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = freezeAtKst.split("T")[0];
    const time = e.target.value;
    setFreezeAt(new Date(`${date}T${time}+09:00`).getTime());
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "0 8px",
        }}
      >
        <TextField<"input">
          type="date"
          value={freezeAtKst.split("T")[0]}
          onChange={handleFreezeDateChange}
          fullWidth
        />
        <TextField<"input">
          type="time"
          value={freezeAtKst.split("T")[1].slice(0, 5)}
          onChange={handleFreezeTimeChange}
          fullWidth
        />
      </div>
    </>
  );
};

export default EditFreeze;
