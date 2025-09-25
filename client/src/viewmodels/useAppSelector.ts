import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "@/viewmodels/store";

// hook có type sẵn
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
