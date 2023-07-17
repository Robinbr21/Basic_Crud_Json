let book_db =  {  
  102:"JS_book",
  103:"C#_book",
  104:"Cpp_book",
  105:"java_book",
  106:"react_book",
  107:"node_book"
}

exports.getBook = async (req, res) => {
  try {
    const bookNames = Object.values(book_db);
    return res.status(200).json({status:true, data: bookNames})
  } catch (error) {
    console.log("ERROR ON GETbOOK :",error);
  }
};


exports.bookbyid = async (req, res) => {
  try {
    let {id}=req.body
    if(id == undefined){
      return res.status(403).json({status:false, message: "undefined book id"})
    }
    let bookName = book_db[id];
    if(bookName != null){
      return res.status(200).json({status:true, data: bookName})
    }else{
      return res.status(404).json({status:false, data: bookName})
    }
  } catch (error) {
    console.log("ERROR ON bookbyid :",error);
  }
};

exports.addnew = async (req, res) => {
  try {
    let {id,name}=req.body
    if(id == undefined || name == undefined){
      return res.status(403).json({status:false, message: "undefined book id or name"})
    }
    book_db[id]= name
    if(book_db[id]== name){
      return res.status(200).json({status:true, message: "succesfully added book details"})
    }else{
      return res.status(404).json({status:false, message: "error occured"})
    }
  } catch (error) {
    console.log("ERROR ON addnew :",error);
  }
};

exports.update = async (req, res) => {
  try {
    let {id,name}=req.body
    if(id == undefined || name == undefined){
      return res.status(403).json({status:false, message: "undefined book id or name"})
    }else if(book_db[id] == undefined){
      return res.status(403).json({status:false, message: `there is no book by ${id} this id`})
    }
    book_db[id] = name
    if(book_db[id]== name){
      return res.status(200).json({status:true, message: "succesfully updated book details"})
    }else{
      return res.status(404).json({status:false, message: "error occured"})
    }
  } catch (error) {
    console.log("ERROR ON update :",error);
  }
};

exports.deleteing = async (req, res) => {
  try {
    let {id}=req.body
    if(book_db[id] == undefined || id == undefined){
      return res.status(404).json({status:false, message: `the book id is undefined`})
    }
    
    if(book_db.hasOwnProperty(id)){
      delete book_db[id];
      return res.status(200).json({status:true, message: "succesfully deleted book details"})
    }
  } catch (error) {
    console.log("ERROR ON update :",error);
  }
};