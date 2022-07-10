let express = require("express"),
  path = require("path"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  mongoDb = require("./db/db");

  process.env.TZ = "Asia/Bangkok";

mongoose.Promise = global.Promise;

mongoose
  .connect(mongoDb.db, {
    useNewUrlParser: true,
    // error : MongoParseError: option usefindandmodify is not supported
    // useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database seccessfully connected");
    },
    (error) => {
      console.log("Database error: " + error);
    }
  );

const blackWhiteRoute = require("./routes/blackWhite.router");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// static directory path

app.use(express.static(path.join(__dirname, "dist/")));

// Base route

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

// API route
app.use("/api", blackWhiteRoute);

// port
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("listening on port " + port);
});

// 404 Handler
// app.use((req, res, next) => {
//   next(createError(404));
// });

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});