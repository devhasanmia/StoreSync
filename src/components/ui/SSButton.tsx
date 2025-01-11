type SSButtonProps = {
    Name:
}
const SSButton = () => {
    return (
        <button
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition"
        >
            <FiEdit />
            Add New category
        </button>
    )
}

export default SSButton