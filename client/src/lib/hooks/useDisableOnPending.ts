'use client';

import { useEffect, useState } from "react";

export default function useDisableOnPending(isPending: boolean) {
    //Kiểm tra xem có đang xử lý đăng ký không có sẽ hiện trạng thái loading
    const [isDisabled, setIsDisabled] = useState(isPending);

    useEffect(() => {
        if (isPending) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [isPending]);

    return isDisabled;
}
