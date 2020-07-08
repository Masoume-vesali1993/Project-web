import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import AwesomeSlider from 'react-awesome-slider';
import { Tabs } from 'antd';
import { Collapse } from 'antd';

// import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';


const { TabPane } = Tabs;
const { Panel } = Collapse;


function ComponyBime() {
    return (
        <div className="allpart">


            <Row>
                <Col span={9} className="box-left">
                    <h2>شرکت‌های ارائه‌دهنده بیمه ثالث</h2>
                    <Row>
                        <Col span={12}><a>بیمه شخص ثالث پارسیان</a></Col>
                        <Col span={12}>img</Col>

                        <Col span={12}><a>بیمه شخص ثالث آسیا</a></Col>
                        <Col span={12}>img</Col>

                        <Col span={12}><a>بیمه شخص ثالث ایران</a></Col>
                        <Col span={12}>img</Col>

                        <Col span={12}><a>بیمه شخص ثالث دانا</a></Col>
                        <Col span={12}>img</Col>
                        
                    </Row>
                </Col>
                
                <Col span={15} className="txt_beme">
                {/* <Col span={12}></Col> */}
                {/* <Col span={12}> */}
            <Tabs defaultActiveKey="2">
                <TabPane
                tab={
                    <span>
                    {/* <AppleOutlined /> */}
                    سوالات متداول
                    </span>
                }
                key="1"
                >
                    
                    <Collapse accordion>
    <Panel header="This is panel header 1" key="1">
      <p>1</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>2</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>3</p>
    </Panel>
  </Collapse>

                </TabPane>
                <TabPane
                tab={
                    <span>
                    {/* <AndroidOutlined /> */}
                    درباره بیمه شخص ثالث
                    </span>
                }
                key="2"
                >
                    <h2>بیمه شخص ثالث</h2>
                    <p>بیمه شخص ثالث
                     در میان انواع طرح‌های بیمه‌ای که از جانب شرکت‌های مختلف ارائه می‌شوند، بیمه شخص ثالث همچنان پرمخاطب‌ترین نوع بیمه است. بدون شک یکی از دلایل اصلی سهم بالای بیمه شخص ثالث در بازار ایران، اجباری بودن این بیمه است. به‌صورتی‌که اگر وسیله نقلیه‌ای تحت این پوشش نباشد، ممکن است عواقب جبران‌ناپذیری داشته باشد که به آن خواهیم پرداخت
                    اما به‌راستی بیمه شخص ثالث چه مواردی را پوشش می‌دهد و علت نام‌گذاری این بیمه چیست. در پوشش بیمه شخص ثالث، شخص اول مالک وسیله نقلیه یا بیمه‌گزار، شخص ثانی شرکت بیمه یا بیمه‌گر و شخص ثالث فرد زیان‌دیده غیر از راننده مقصر در حادثه هستند
                    <br/>
                    برای مثال در یک حادثه رانندگی هزینه درمان، فوت و خسارت وارد شده به اموال تمامی افراد زیان‌دیده، تحت پوشش بیمه شخص ثالث قرار می‌گیرد. راننده مقصر نیز تحت پوشش بیمه حوادث راننده که به تازگی جزئی از بیمه شخص ثالث شده است قرار می‌گیرد. با این تفاوت که بیمه حوادث راننده تنها خسارت‌های جانی را پوشش می‌دهد و در برابر خسارات مالی مسئولیتی ندارد.
                     بیمه شخص ثالث را تمامی شرکت‌های بیمه ارائه می‌دهند و نرخ بیمه در شرکت‌های مختلف می‌تواند متفاوت باشد. همچنین تفاوت در کیفیت ارائه خدمات این بیمه می‌تواند تأثیر بسزایی در میزان رضایت بیمه‌گزار داشته باشد. در ادامه به بررسی بهترین بیمه شخص ثالث نیز خواهیم پرداخت.
                    </p>
                    <br/>
                    <h2>روش محاسبه حق بیمه شخص ثالث</h2>
                    <p>در اولین قدم به این می‌پردازیم که حق بیمه شخص ثالث بر چه اساسی تعیین می‌شود و سپس به عوامل مؤثر بر قیمت نهایی خواهیم پرداخت</p>
                    <br/>
                    <h2>حق بیمه پایه ابلاغ شده توسط بیمه مرکزی</h2>
                    <p>اساس تعیین حق بیمه شخص ثالث و میزان پوشش مالی و جانی که به آن خواهیم پرداخت مبلغ تعیین‌شده برای دیه کامل یک انسان در ماه حرام است. هر ساله قوه قضائیه میزان مشخصی را به عنوان حق دیه کامل در ماه حرام اعلام می‌کند. در سال 99 دیه کامل در ماه حرام 440 میلیون تومان و در ماه غیرحرام 330 میلیون تومان تعیین شده است. در تقویم قمری چهار ماه‌ ذی‌القعده، ذی‌الحجه، محرم و رجب ماه‌های حرام به شمار می‌آیند. بدین معنی که اگر فوت ناشی از حادثه رانندگی در یکی از این چهار ماه رخ دهد میزان دیه 440 میلیون تومان و در باقی ماه‌های سال 330 میلیون تومان خواهد بود. بر همین اساس حداقل پوشش مالی نیز در سال 99، 11 میلیون تومان تعیین شده است که یک چهلم دیه کامل در ماه حرام است. بیمه مرکزی بر اساس این مبلغ، حق بیمه‌ را به شرکت‌های بیمه ابلاغ می‌کند. این مبلغ پایه حق بیمه خواهد بود. در مراحل بعدی می‌توان با استفاده از تخفیف‌ها و تغییر برخی از فاکتورهای مؤثر بر حق بیمه، قیمت بیمه شخص ثالث را کاهش یا افزایش داد</p>
                    <br/>
                    <h2>تخفیف عدم خسارت بیمه شخص ثالث</h2>
                    <p>محاسبه تخفیف عدم خسارت در بیمه شخص ثالث مدتی است که تغییر کرده است. قبلاً هر تعداد سال تخفیف که روی بیمه‌نامه قبلی‌تان نوشته شده بود به اضافه 1 می‌کردید (درصورتی‌که بیمه قبلی‌تان یک‌ساله باشد و در این مدت از آن استفاده نکرده باشید) و به‌عنوان سال‌های تخفیف عدم خسارت عنوان می‌کردید. الآن برای محاسبه تخفیف عدم خسارت این بیمه باید از درصد تخفیف بیمه‌نامه قبلی و حوادث راننده که هر دو بر روی بیمه‌نامه قبلی درج شده است استفاده کنید. بنابراین موقع دریافت استعلام قیمت بیمه شخص ثالث به بیمه‌نامه قبلی خود نگاه کنید؛ اگر درصد تخفیف ثالث 10 و درصد تخفیف حوادث راننده 5 باشد از همین اعداد برای استعلام قیمت استفاده کنید. در گام بعدی اینکه در مدت بیمه‌نامه قبلی از آن استفاده کردید یا نه اهمیت دارد. اگر در این مدت از بیمه‌نامه خودرو استفاده کرده باشید باید تعداد خسارت‌های جانی، مالی و حوادث راننده را نیز از روی بیمه‌نامه بخوانید. درصورتی‌که از بیمه‌نامه خودرو استفاده کرده باشید بر روی آن یک مهر زده شده که تعداد خسارت و نوع آن توسط مرکز پرداخت خسارت شرکت بیمه مشخص است. با استفاده از درصد تخفیف بیمه‌نامه و اینکه در این مدت از بیمه‌نامه استفاده کردید یا نه می‌توانید میزان تخفیف عدم خسارت بیمه‌نامه خود را محاسبه کنید و استعلام قیمت بیمه شخص ثالث بگیرید</p>
                    <br/>
                    <h2>کاربری خودرو</h2>
                    <p>کاربری خودرو تعیین‌کننده میزان ریسک خودرو برای رخ دادن حادثه و همچنین میزان هزینه معمول در یک حادثه رانندگی است. برای مثال خودروهای تاکسی یا آموزش رانندگی، بیشتر در معرض حوادث رانندگی هستند و باید حق بیمه شخص ثالث بیشتری را پرداخت کنند. تاکسی‌ها موظف به پرداخت 20% حق بیمه ثالث بیشتر و خودروهای آموزش رانندگی موظف به پرداخت 15% حق بیمه ثالث بیشتر هستند. کاربری‌های دیگری نیز تعریف شده‌است که برخی از آن‌ها صنعتی، آمبولانس و حمل خون و آتش‌نشانی، بارکش، عمومی سازمانی و ... هستند</p>
                    <br/>
                    <h2>جریمه دیرکرد بیمه شخص ثالث</h2>
                    <p>در مقابل تخفیف عدم خسارت بیمه شخص ثالث، جریمه دیرکرد آن موجب افزایش حق بیمه می‌شود. همان‌طور که اشاره کردیم بیمه شخص ثالث برای تمامی دارندگان وسایل نقلیه اجباری است. درصورتی‌که در تمدید بیمه شخص ثالث وقفه‌ای بیفتد به صورت روزشمار مبلغی به حق بیمه ماشین اضافه خواهد شد که برای خودروهای مختلف متفاوت است. اضافه شدن جریمه دیرکرد به حق بیمه ماشین به صورت روزشمار تنها تا 365 روز محاسبه و اعمال می‌شود؛ به این صورت که جریمه دیرکرد یک سال با دو سال فرقی ندارد</p>
                    <br/>
                    <h2>میزان پوشش</h2>
                    <p>میزان پوشش از موارد دیگری است که تعیین‌کننده حق بیمه ماشین است. پوشش به معنای تعهد مالی شرکت بیمه در مقابل بیمه‌گزار است. حداقل میزان پوشش مالی تعیین شده از جانب بیمه مرکزی در سال 99، 11 میلیون تومان است. بیمه‌گزار می‌تواند با پرداخت حق بیمه بیشتر، پوشش مالی بالاتری را خریداری کند. برای مثال اگر خسارت وارد‌شده به زیان‌دیده در یک حادثه رانندگی 15 میلیون تومان باشد و فرد مقصر حداقل میزان پوشش مالی را خریداری کرده باشد، باید مابه‌تفاوت 4 میلیون تومان خسارت وارد‌شده را شخصاً تقبل کند در صورتی‌که با پرداخت حق بیمه اندکی بیشتر و خرید پوشش 15 میلیون تومانی لازم نبود هیچ هزینه‌ای را جدا از خسارت پرداختی شرکت بیمه بپردازد. همان‌طور که می‌دانید در چند سال گذشته قیمت ماشین رشد چند برابری داشته به همین دلیل ممکن است در تصادف با یک خودروی گران‌قیمت خسارت واردشده بیشتر از پوشش پایه بیمه ثالث باشد؛ بنابراین توصیه می‌شود حتماً پوشش مالی بیمه شخص ثالث ماشین خود را بالا انتخاب کنید و به پوشش پایه این بیمه اکتفا نکنید. با خرید بیمه شخص ثالث از بیمیتو می‌توانید ببینید هر شرکت بیمه چه پوشش‌های مالی را ارائه می‌دهد و قیمت هر یک چقدر است</p>
                    <br/>
                    <h2>تخفیف شرکت بیمه</h2>
                    <p>در سال‌های گذشته بیمه مرکزی هر ساله حداقل و حداکثر حق بیمه را به شرکت‌های بیمه ابلاغ می‌کرد و شرکت‌های بیمه می‌توانستند در این بازه قیمتی، مبلغی را که برایشان مطلوب بود به عنوان حق بیمه ثالث به متقاضیان بیمه شخص ثالث اعلام ‌کنند؛ در حال حاضر بعضی از شرکت‌های بیمه این تخفیف 2 و نیم درصدی را ارائه می‌دهند و بعضی خیر؛ بنابراین قیمت بیمه شخص ثالث شرکت‌های مختلف با یکدیگر تفاوت دارد. به عنوان مثال در سال جاری بیمه شخص ثالث آسیا این تخفیف را ارائه می‌کند ولی بیمه شخص ثالث ایران آن را ارائه نمی‌دهد. علاوه بر تخفیف شرکت بیمه تخفیف عدم خسارت بیمه‌نامه قبلی شما نیز بر نرخ بیمه شما تاثیر می‌گذارد و در استعلام نرخ بیمه شخص ثالث باید آن را اعمال کنید</p>
                    <br/>
                    <h2> مدت اعتبار بیمه‌نامه</h2>
                    <p>مدت اعتبار بیمه ‌نامه شخص ثالث می‌تواند از چند روز تا یک سال باشد. برخی از شرکت‌های بیمه، بیمه شخص ثالث را به صورت روزشمار نیز ارائه می‌دهند. در کل خرید بیمه نامه شخص ثالث به صورت سالانه مقرون‌به‌صرفه‌تر است. برای مثال قیمت بیمه‌نامه شش ماهه از نصف قیمت بیمه‌نامه یک ساله بیشتر است. چرا که بیمه‌های کوتاه مدت برای شرکت‌های بیمه ریسک بیشتری دارند</p>
                    <br/>
                    <p>نحوه تأثیرگذاری تمامی فاکتورهای بالا در فرمول‌هایی وارد می‌شوند و قیمت بیمه شخص ثالث را تعیین می‌کند. با توجه به پیچیده بودن این محاسبات می‌توان با مراجعه به وب‌سایت و اپلیکیشن خرید آنلاین بیمه بیمیتو با تغییر هر یک از این موارد نحوه تأثیر آن را بر نرخ بیمه بررسی کرد. برای مثال می‌توان پوشش بیمه‌نامه را از 11 میلیون تومان تا 220 میلیون تومان تغییر داد و گزینه مناسب را انتخاب کرد
                        <br/>
                        در مجموع با بررسی از طریق وب‌سایت و اپلیکیشن بیمیتو متوجه خواهید شد که در مورد بیمه شخص ثالث، نرخ بیمه شرکت‌های مختلف با یکدیگر تفاوت چندانی ندارد و عامل اصلی برتری یک شرکت به شرکت‌های دیگر کیفیت خدمات‌دهی آن است که البته این عامل نیز در سامانه بیمیتو بر اساس نظرسنجی‌ها و آمار بیمه مرکزی قابل مقایسه است
                    </p>
                </TabPane>
             </Tabs>,

                </Col>
            </Row>

            <div className="test-slider">
                <h3>مشتریان بیمیتو چه می گویند؟</h3>
                
            </div>
        </div>
    );
}

export default ComponyBime;
