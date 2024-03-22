exports.handleRoute=async(req,res,next)=>{



    res.status(400).json({
        success:false,
        message:"Invalid Route / Route doesnot exist"
    })

}