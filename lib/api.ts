import axios from "axios";
import { NewNote, type Note } from "../types/note";

const axiosInst = axios.create({
  baseURL: "https://notehub-public.goit.study/",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
  },
});

//* === GET by ID ===

//* === CREATE === *
// interface newTaskProp {
//   title: string;
//   content: string;
//   tag: NoteTag;
// }
