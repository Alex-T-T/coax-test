export const deleteItem = async (id: string) => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/items/${id}`, {
        method: 'DELETE',
    });
};
