import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

type DeleteConfirm = {
    title?: string;
    description?: string;
    textCancle?: string;
    textConfirm?: string;
    icon?: React.ReactNode;
    onConfirm?: () => void;
};

export default function AlertConfirm({
    title = "",
    description = "",
    textCancle = "Trở lại",
    textConfirm = "Chắc chắn",
    icon = <Check />,
    onConfirm,
}: DeleteConfirm) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    className="hover:cursor-pointer hover:bg-red-700"
                    variant="destructive">
                    {icon}
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>{description}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="hover:cursor-pointer">{textCancle}</AlertDialogCancel>
                    <AlertDialogAction className="hover:cursor-pointer" onClick={onConfirm}>
                        {textConfirm}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
