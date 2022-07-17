const express = require("express");
const app = express();
const crypto = require("crypto");

const blackWhiteRoute = express.Router();
let BlackWhiteList = require("../models/blackList");

// Post method version
blackWhiteRoute.route("/apiAllBlackWhiteList").post((req, res, next) => {
  try {
    let receiveNo = req.body.receiveNo;
    let sku = req.body.sku;
    let serialNoNew = req.body.serialNoNew;
    let serialNoOld = req.body.serialNoOld;
    let type = req.body.type;
    let status = req.body.status;

    BlackWhiteList.find(
      (error, data) => {
        if (error) {
          return next(error);
        } else {
          var list = [];
          for(var i = 0 ;i < data.length ; i++){
            const result = {
              guidKey: data[i].guidKey,
              sku: data[i].sku,
              receiveNo: data[i].receiveNo,
              serialNoNew: data[i].serialNoNew,
              serialNoOld: data[i].serialNoOld,
              type: data[i].type,
              recordDate: data[i].recordDate,
              guidKeyWarranty: data[i].guidKeyWarranty,
              status: data[i].status,
              createDate: data[i].createDate,
              createBy: data[i].createBy,
              updateDate: data[i].updateDate,
              updateBy: data[i].createBy,
            };
            list.push(result);
          }

          res.json(list);
        }
      }
    );
  } catch (err) {
    const result = {
      success: false,
      message: err,
      result: null,
    };
    res.json(result);
  }
});

blackWhiteRoute.route("/apiGetBlackWhiteList").post((req, res, next) => {
  try {
    let receiveNo = req.body.receiveNo;
    let sku = req.body.sku;
    let serialNoNew = req.body.serialNoNew;
    let serialNoOld = req.body.serialNoOld;
    let type = req.body.type;
    let status = req.body.status;

    BlackWhiteList.find(
      {
        receiveNo: { $regex: receiveNo },
        sku: { $regex: sku },
        serialNoNew: { $regex: serialNoNew },
        serialNoOld: { $regex: serialNoOld },
        type: { $regex: type },
        status: { $regex: status },
      },
      (error, data) => {
        if (error) {
          return next(error);
        } else {
          var list = [];
          for(var i = 0 ;i < data.length ; i++){
            const result = {
              guidKey: data[i].guidKey,
              sku: data[i].sku,
              receiveNo: data[i].receiveNo,
              serialNoNew: data[i].serialNoNew,
              serialNoOld: data[i].serialNoOld,
              type: data[i].type,
              recordDate: data[i].recordDate,
              guidKeyWarranty: data[i].guidKeyWarranty,
              status: data[i].status,
              createDate: data[i].createDate,
              createBy: data[i].createBy,
              updateDate: data[i].updateDate,
              updateBy: data[i].createBy,
            };
            list.push(result);
          }

          res.json(list);
        }
      }
    );
  } catch (err) {
    const result = {
      success: false,
      message: err,
      result: null,
    };
    res.json(result);
  }
});

blackWhiteRoute.route("/apiGetBlackWhite").post((req, res, next) => {
  try {
    let guidKey = req.body.guidKey;
    BlackWhiteList.find({ guidKey: guidKey }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        const result = {
          guidKey: data[0].guidKey,
          sku: data[0].sku,
          receiveNo: data[0].receiveNo,
          serialNoNew: data[0].serialNoNew,
          serialNoOld: data[0].serialNoOld,
          type: data[0].type,
          recordDate: data[0].recordDate,
          guidKeyWarranty: data[0].guidKeyWarranty,
          status: data[0].status,
          createDate: data[0].createDate,
          createBy: data[0].createBy,
          updateDate: data[0].updateDate,
          updateBy: data[0].createBy,
        };
        res.json(result);
      }
    });
  } catch (err) {
    const result = {
      success: false,
      message: err,
      result: null,
    };
    res.json(result);
  }
});

blackWhiteRoute.route("/apiSearchByReceiveNo").post((req, res, next) => {
  try {
    let receiveNo = req.body.receiveNo;
    let serialNoNew = req.body.serialNoNew;
    BlackWhiteList.find(
      { $or: [{ receiveNo: receiveNo }, { serialNoNew: serialNoNew }] },
      (error, data) => {
        if (error) {
          return next(error);
        } else {
          var list = [];
          for(var i = 0 ;i < data.length ; i++){
            const result = {
              guidKey: data[i].guidKey,
              sku: data[i].sku,
              receiveNo: data[i].receiveNo,
              serialNoNew: data[i].serialNoNew,
              serialNoOld: data[i].serialNoOld,
              type: data[i].type,
              recordDate: data[i].recordDate,
              guidKeyWarranty: data[i].guidKeyWarranty,
              status: data[i].status,
              createDate: data[i].createDate,
              createBy: data[i].createBy,
              updateDate: data[i].updateDate,
              updateBy: data[i].createBy,
            };
            list.push(result);
          }

          res.json(list);
        }
      }
    );
  } catch (err) {
    const result = {
      success: false,
      message: err,
      result: null,
    };
    res.json(result);
  }
});
blackWhiteRoute.route("/apiInsertBlackWhite").post((req, res, next) => {
  try {
    let dateTime = new Date();
    let dateInput = req.body.recordDate;
    let dateSplit = dateInput.split('/');
    let newDateFormat = dateSplit[2] + '-' + dateSplit[1] + '-' + dateSplit[0]
    let dateData = new Date(newDateFormat);
    let data = new BlackWhiteList({
      guidKey: `${crypto.randomUUID()}`,
      sku: req.body.sku,
      receiveNo: req.body.receiveNo,
      serialNoNew: req.body.serialNoNew,
      serialNoOld: req.body.serialNoOld,
      type: req.body.type,
      recordDate: dateData,
      guidKeyWarranty: `${crypto.randomUUID()}`,
      status: req.body.status,
      createDate: dateTime,
      createBy: req.body.createBy,
      updateDate: dateTime,
      updateBy: req.body.createBy,
    });
    BlackWhiteList.create(data, (error, data) => {
      if (error) {
        return next(error);
      } else {
        const result = {
          success: true,
          message: "insert successfully",
          result: null,
        };
        res.json(result);
      }
    });
  } catch (err) {
    const result = {
      success: false,
      message: err,
      result: null,
    };
    res.json(result);
  }
});

blackWhiteRoute.route("/apiUpdateBlackWhite").post((req, res, next) => {
  try {
    let dateTime = new Date();
    let dateInput = req.body.recordDate;
    let dateSplit = dateInput.split('/');
    let newDateFormat = dateSplit[2] + '-' + dateSplit[1] + '-' + dateSplit[0]
    let dateData = new Date(newDateFormat);
    BlackWhiteList.updateOne(
      { guidKey: req.body.guidKey },
      {
        $set: {
          receiveNo: req.body.receiveNo,
          sku: req.body.sku,
          serialNoNew: req.body.serialNoNew,
          serialNoOld: req.body.serialNoOld,
          type: req.body.type,
          recordDate: dateData,
          status: req.body.status,
          updateDate: dateTime,
          updateBy: req.body.updateBy,
        },
        $currentDate: { lastModified: true },
      },
      (error, data) => {
        if (error) {
          return next(error);
          console.log(error);
        } else {
          const result = {
            success: true,
            message: "update successfully",
            result: null,
          };
          res.json(result);
        }
      }
    );
  } catch (err) {
    const result = {
      success: false,
      message: err,
      result: null,
    };
    res.json(result);
  }
});

blackWhiteRoute.route("/apiDeleteBlackWhite").post((req, res, next) => {
  try {
    BlackWhiteList.deleteOne({ guidKey: req.body.guidKey }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        const result = {
          success: true,
          message: `delete ${req.body.guidKey} successfully`,
          result: null,
        };
        res.json(result);
      }
    });
  } catch (err) {
    const result = {
      success: false,
      message: err,
      result: null,
    };
    res.json(result);
  }
});

module.exports = blackWhiteRoute;
