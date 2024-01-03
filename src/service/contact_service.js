const Contact = require('../model/contact_model')

const createContactService = async(payload)=>{
    const result = await Contact.create(payload)
    return result
}

const getAllContactService = async()=>{
    const result = await Contact.find({}).sort({ createdAt: -1 })
    return result
}
const getSingleContactService = async(id)=>{
    const result = await Contact.findById(id)
    return result
}
const updateDatat = async(id,payload)=>{
    const result = await Contact.findByIdAndUpdate(
        id,
        payload,
        {new:true}
    )
    return result
}
const deleteSingleDataService = async(id)=>{
    const result = await Contact.findByIdAndDelete(
        id
    )
    return result
}
const toggleService = async(id,data)=>{
    const result = await Contact.findByIdAndUpdate(
        id,
        data,
        {new:true}
    )
    return result
}


module.exports = {
    createService: createContactService,
    getContact:getAllContactService,
    updateSingleData:updateDatat,
    deleteSingleData:deleteSingleDataService,
    getSingleService:getSingleContactService,
    toggleService:toggleService
}