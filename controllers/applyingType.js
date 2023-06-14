const { ApplyingType } = require("../models/applyingType");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAllApplyingTypes = async (req, res, next) => {
  const applyingTypes = await ApplyingType.find();
  console.log(req.query);
  return res.json({ status: "success", code: 200, applyingTypes });
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  const applyingType = await ApplyingType.findById({ id });
  if (!applyingType) {
    throw HttpError(404, "Not Found");
  }
  return res.json({ status: "success", code: 200, applyingType });
};

const add = async (req, res, next) => {
  const applyingType = await ApplyingType.create(req.body);
  return res
    .status(201)
    .json({ status: "success", code: 201, data: { applyingType } });
};

const deleteApplyingType = async (req, res, next) => {
  const { id } = req.params;
  const applyingType = await ApplyingType.findByIdAndDelete(id);
  if (applyingType) {
    return res.json({
      status: "success",
      code: 200,
      message: "applyingType deleted",
    });
  }
  return res.json({ status: "error", code: 404, message: "Not found" });
};

const updateById = async (req, res, next) => {
  const applyingType = await ApplyingType.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (applyingType) {
    return res.json({ status: "success", code: 200, data: { applyingType } });
  }
  return res.json({ status: "error", code: 404, message: "Not found" });
};

module.exports = {
  getAllApplyingTypes: ctrlWrapper(getAllApplyingTypes),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  deleteApplyingType: ctrlWrapper(deleteApplyingType),
  updateById: ctrlWrapper(updateById),
};
