import React, { Component } from "react";
import ReactDOM from "react-dom";

import "antd/dist/antd.css";
import { Card, Col, Row } from "antd";

import safr from "./Img/safr.jpg";
import khane from "./Img/khane.jpg";
import omr from "./Img/omr.jpg";
import sales from "./Img/sales.jpg";

const { Meta } = Card;

export default class Index extends Component {
  render() {
    return (
      <div className="site-card-wrapper card-img">
        <Row gutter={24} style={{margin:0}}>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={sales} />}
            >
              <Meta
                title="بیمه شخص ثالث"
                description="بیمه شخص ثالث بیمه‌ای الزامی برای دارندگان وسایل نقلیه موتوری است. با بیمیتو، امکان استعلام قیمت بیمه شخص ثالث و خرید آنلاین آن از تمامی شرکت‌های بیمه (بیمه ایران، آسیا، پاسارگاد، البرز، نوین، ملت، دانا، سینا، آرمان، کارآفرین و ...) وجود دارد."
              />
              <br />
              <button>
                <a>بیشتر</a>
              </button>
            </Card>
            ,
          </Col>

          <Col span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={omr} />}
            >
              <Meta
                title="بیمه عمر"
                description="بیمه عمر و سرمایه‌گذاری از شما و خانواده شما در طول مدت زندگی محافظت می‌کند. حتی بعد از مرگ بیمه‌گزار نیز از خانواده او پشتیبانی می‌کند. با بیمیتو می‌توانید اقدام به مقایسه شرایط بیمه عمر شرکت‌های مختلف بیمه کنید و مناسب‌ترین بیمه را به‌صورت آنلاین خریداری کنید."
              />
              <br />
              <button>
                <a>بیشتر</a>
              </button>
            </Card>
            ,
          </Col>

          <Col span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={khane} />}
            >
              <Meta
                title="بیمه آتش سوزی"
                description="بیمه آتش سوزی ساختمان بیمه‌ای اختیاری است که متأسفانه لزوم خرید آن، زمانی احساس می‌شود که خیلی دیر شده است. با بیمیتو می‌توانید از پیشنهادهای مختلف شرکت‌های بیمه و تخفیف‌های ویژه آن‌ها مطلع شوید. همچنین امکان مقایسه و خرید آنلاین بیمه آتش سوزی از شرکت‌های مختلف بیمه با بیمیتو فراهم شده است."
              />
              <br />
              <button>
                <a>بیشتر</a>
              </button>
            </Card>
            ,
          </Col>

          <Col span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={safr} />}
            >
              <Meta
                title="بیمه مسافرتی خارج از کشور"
                description="بیمه مسافرتی خارج از کشور از شما در برابر خطرات ممکن در طول سفرهای خارجی محافظت می‌کند. با اپلیکیشن و وب‌سایت بیمیتو می‌توانید پس از استعلام قیمت بیمه مسافرتی شرکت‌های مختلف و مقایسه آن‌ها، بهترین انتخاب را داشته باشید و بیمه مورد نظر خود را آنلاین خریداری کنید."
              />
              <br />
              <button>
                <a>بیشتر</a>
              </button>
            </Card>
            ,
          </Col>
        </Row>
      </div>
    );
  }
}

