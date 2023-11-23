export const getItemsList = async () => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/items`).then(
        (res) => {
            if (!res.ok) {
                throw new Error(res.status.toString(), {
                    cause: res.statusText,
                });
            }
            return res.json();
        }
    );
};
