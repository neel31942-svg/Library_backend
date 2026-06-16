const getAllBooks = async (req, res) => {

    try {
        const allbooks = await Book.find();
        if (allbooks.length === 0) {
            return res.status(404).json({
                message: "No books found",
                status: 404,
            });
        }
        res.status(200).json({
            message: "Books fetch successfully",
            status: 200,
            data: allbooks,
        })


    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            status: 500,
        });
    }  
    }
    export default getAllBooks;