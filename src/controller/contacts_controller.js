const httpStatus = require("http-status");
const {
  createService,
  getContact,
  updateSingleData,
  deleteSingleData,
  getSingleService,
  toggleService,
} = require("../service/contact_service");
const sendResponse = require("../utils/reusable");
const CatchAsync = require("../utils/CatchAsync");

const createContactController = CatchAsync(async (req, res) => {
  const result = await createService(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Create Successfull",
    data: result
  });
});

const getAllContact = CatchAsync(async (req, res) => {
  const result = await getContact();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: false,
    message: "All Contact retrieved successfully",
    data: result,
  });
});

const getSingleContact = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getSingleService(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Contact retrieved successfully",
    data: result,
  });
});

const updateSingleContact = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const result = await updateSingleData(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Update successfully",
    data: result,
  });
});

const deleteSingleContactController = CatchAsync(async (req, res) => {
    const { id } = req.params;
      const result = await deleteSingleData(id);
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "delete Contact successfully",
        data: result,
      });
  })
const toggleFvrt = CatchAsync(async (req, res) => {
  console.log(req.body)
    const { id } = req.params;
    const data = req.body
      const result = await toggleService(id,data);
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "change successfully",
        data: result,
      });
  })

module.exports = {
  ContactController: createContactController,
  getAllContactController: getAllContact,
  updateContactController: updateSingleContact,
  deleteSingleContact: deleteSingleContactController,
  getSingleContactController: getSingleContact,
  toggleFvrt:toggleFvrt
};
