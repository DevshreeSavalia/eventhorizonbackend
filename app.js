var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');
var comm_reg=require('./routes/com_reg_route');
var user=require('./routes/user_route');
var ulogin = require('./routes/login_route');
var upcomsegment=require('./routes/upcom_segment_route');
var upcompage=require('./routes/upcom_page_route');
var pastsgmt=require('./routes/past_segment_route');
var memsgmt=require('./routes/member_segment_route');
var event = require('./routes/event_q_route');
var eve = require('./routes/event_route');
var feedback = require('./routes/feedback_route');
var comm_route = require('./routes/community_route');
var cat_route = require('./routes/category_route');
var pro_route =require('./routes/profile_route');
var com_id=require('./routes/comm_route_id');
var index = require('./routes/index');
var users = require('./routes/users');
var mail=require('./routes/sendmail_routes');
var sea_route=require('./routes/search_route');
var pas_mem=require('./routes/past_member_routes');
var up_mem=require('./routes/upmember_route');
var event_reg=require('./routes/evt_reg_route');
var up_seg_id=require('./routes/up_seg_id_route');
var past_seg_id=require('./routes/past_seg_id_route');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/comm_reg',comm_reg);
app.use('/pastsgmt',pastsgmt);
app.use('/memsgmt',memsgmt);
app.use('/user',user);
app.use('/upcomsegment',upcomsegment);
app.use('/upcompage',upcompage);
app.use('/event',event);
app.use('/eve',eve);
app.use('/feedback',feedback);
app.use('/com_id',com_id);
app.use('/', index);
app.use('/users', users);
app.use('/ulogin', ulogin);
app.use('/comm_route',comm_route);
app.use('/cat_route',cat_route);
app.use('/pro_route',pro_route);
app.use('/sea_route',sea_route);
app.use('/pas_mem',pas_mem);
app.use('/up_mem',up_mem);
app.use('/event_reg',event_reg);
app.use('/sendmail',mail);
app.use('/up_seg_id',up_seg_id);
app.use('/past_seg_id',past_seg_id);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
