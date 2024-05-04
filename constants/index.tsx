import SmartLottie from '../components/LottieComponents/SmartLottie'
import WorldLottie from '../components/LottieComponents/WorldLottie'
import LockLottie from '../components/LottieComponents/LockLottie'
import ClickLottie from '../components/LottieComponents/ClickLottie'
import { ReadMoreWeb } from 'react-shorten';



const StyledReadMore: React.FC<{
  truncate?: number;
  children: React.ReactNode;
}> = ({ truncate, children }) => (
  <ReadMoreWeb

    truncate={truncate}
    showMoreText="المزيد"
    showLessText="اقل"
    className={`text-jabi jaibFontBold font-bold 2xl:text-4xl xl:text-2xl lg:text-xl  text-xl  `}

  >
    {children}
  </ReadMoreWeb>
);


export const CardMain = [
  {
    title: "جيبك الإلكتروني يُغنيك!",
    description: "تخلَّص من الدفع النقدي، وانتقل إلى مستقبل  الدفع الإلكتروني السهل والآمن عبر محفظة جيب",
    src: "/mainImg/main1.png"
  }
  ,
  {
    title: "الجيب المُتاح للجميع!",
    description: "توفر جيب تجربة دفع إلكتروني يخدم الذكور والإناث  بجميع الفئات العمرية الذي يُسهِّل عليهم تعاملاتهم المالية المختلفة. ",
    src: "/mainImg/main2.png"
  },
  {
    title: "وجهتك الأنسب للدفع!",
    description: "تعمل جيب بتقنيات إلكترونية مبتكرة تُلبيّ كل الاحتياجات في التعامل المالي السلس والحر والآمن.",
    src: "/mainImg/main3.png"
  },
  {
    title: "الجيب الفعّال في كل مكان!",
    description: "تتيح لك جيب استخدام خدماتها المختلفة من  أي مكان وفي أي وقت بخطوات سهلة ومُختصرة",
    src: "/mainImg/main4.png"
  },

]

export const OurServis = [
  {
    title: "التحويلات",
    description: "تُمكّنك جيب من إرسال الأموال إلى أصدقاءك المشتركين في المحفظة من مكانك وبضغطه زر، كما تتيح تحويل الأموال بين حساباتك بالعملات المختلفة داخل المحفظة، وصرف الحوالات المحلية والدولية لحسابك في المحفظة بسهولة.",
    src: "./SVG/ic_transfers.svg"
  }
  ,
  {
    title: "حزمي تحويل",
    description: "تقدر ترسل وتصرف حوالتك (حزمي تحويل) عبر محفظة جيب بكل سهولة وفي أي وقت. وتستفسر عن الحوالة أو تلغيها.",
    src: "./SVG/ic_hazmi.svg"
  }
  ,
  {
    title: "شحن و سداد",
    description: "سدد عبر جيب فواتيرك بكل سهولة وأمان وراحة من بيتك وفي أي وقت.. يعني فواتير الإنترنت مثلا أو الهاتف الثابت وغيرها.. أيضا تقدر تشحن رصيد لجوالك أو لأحد معارفك سواءً لنظام الباقات أو الدفع المسبق أو نظام الفوترة لجميع شبكات الاتصالات المحلية.",
    src: "./SVG/ic_services.svg"
  },

 
  {
    title: "دفع المشتريات",
    description: "يمكن لأي شخص مشترك في محفظة جيب يستبدل الدفع الكاش بالدفع الإلكتروني عبر محفظة جيب لكل مشترياته من المحلات التجارية والخدمية والمطاعم والكافيهات بسهولة وراحة، من خلال مسح QR Code أو إدخال رقم نقطة البيع.",
    src: "./SVG/ic_purchases.svg"
  },
  {
    title: "الإيداع و السحب النقدي",
    description: "يُمكنك سحب أموالك كاش عبر وكلاء جيب المنتشرين في مختلف المحافظات بعد تغذية حسابك عبر وكلاء جيب أيضًا أو نقاط الخدمة أو صرف حوالاتك المالية من مختلف الشبكات إلى حسابك في محفظة جيب.",
    src: "./SVG/ic_cash_out.svg"
  },

]

export const projects = [
  {
    title: " خيارك الآمن",
    description: "وفّرت جيب مساحة أمان وحماية عالية وخاصة لمعلوماتك وأموالك وتعاملاتك المالية المختلفة.",
    src: "1.webp",
    icon: <LockLottie />,
    postion: "lg:order-last"


  },
  {
    title: " عالمك الأوسع",
    description: "تتميز جيب بتلبية تعاملاتك المالية المختلف كـ تسديد الخدمات ودفع المشتريات وإرسال الحوالات وغيرها . . .",
    src: "2.webp",
    icon: <WorldLottie />,



  },
  {
    title: "اختيارك الذكي",
    description: "تختصر جيب وقتك وجهدك بتعاملات مالية إلكترونية ذكية ومبتكرة تخدم احتياجاتك.",
    src: "3.webp",
    icon: <SmartLottie />,
    postion: "lg:order-last"

  },
  {
    title: "متعة الدفع بنقرة",
    description: "اعتمدت جيب السهولة والسلاسة والسرعة في استخدامك للمحفظة وخدماتها.",
    src: "4.webp",
    icon: <ClickLottie />,

  },

]

export const TipsPaymentCard = [
  {
    id: 1,
    title: "كلمات السر",
    description: "حافظ على أمان و سرية حساباتك عن طريق إنشاء كلمة مرور مركبة .",
    src: "/mainImg/Tips1.jpg",
  }
  ,
  {
    id: 2,
    title: "شحن الرصيد",
    description: "لا تشارك كلمة المرور الخاصة بك لأي شخص",
    src: "/mainImg/Tips2.jpg",
  },
  {
    id: 3,
    title: "سداد خدمات",
    description: "مراجعة تقارير عملياتك و رصيد حسابك و دائما .",
    src: "/mainImg/Tips3.jpg",
  },
  {
    id: 4,
    title: "دفع المشتريات",
    description: "متابعة أشعارات تطبيق جيب و تحديثاته",
    src: "/mainImg/Tips4.jpg",
  },


]


export const OurServisCard = [
  {
    title: "التحويلات المالية",
    src: "/prsanilImg/TM.png",
    list: <StyledReadMore truncate={110}>

      <p className={`inline text-justify dis  mt-5 2xl:text-4xl xl:text-3xl lg:text-2xl text-2xl text-black `}>
        تقدر من خلال جيب إرسال الأموال إلى أصدقاءك المشتركين في المحفظة من مكانك وبلمسة زر، وأيضا تحويل الأموال بين حساباتك بالعملات المختلفة داخل المحفظة، وصرف الحوالات المحلية والدولية لحسابك في المحفظة بسهولة. <ul dir='rtl' className="list-disc   mt-5 2xl:text-3xl xl:text-2xl lg:text-xl text-xl text-black  xl:px-10 lg:px-5 px-5">
          <li><span className='text-jabi jaibFontBold'>التحويل إلى غير مشترك:</span>يمكنك بهذه الخدمة تحويل حوالاتك المالية من حسابك في جيب إلى حساب شخص آخر لديه حساب في محفظة جيب.</li>
          <li><span className='text-jabi jaibFontBold'>التحويل بين حساباتي:</span>تستطيع بهذه الخدمة تحويل أموالك بمختلف العملات بين حساباتك المختلفة في محفظة جيب.</li>
          <li><span className='text-jabi jaibFontBold'>صرف حوالة المحفظة:</span>تتيح هذه الخدمة سحب الحوالات المالية من الشبكات المحلية لحسابك في المحفظة.</li>
          <li><span className='text-jabi jaibFontBold'>طلب صرف حوالة محلية:</span>تتيح هذه الخدمة سحب الحوالات المالية من الشبكات المحلية لحسابك في المحفظة.</li>
          <li><span className='text-jabi jaibFontBold'>طلب صرف حوالة دولية:</span> كما تتيح محفظة جيب صرف الحوالات الدولية من الشبكات الدولية لحسابك في المحفظة. </li>

        </ul>
      </p>


    </StyledReadMore>,
    postion: "lg:order-first ",
    bg: "bg-white",
    hrefDiv:"Moneytransfers"
  },
  {
    title: "حزمي تحويل",
    src: "/prsanilImg/HT.png",
    list: <StyledReadMore truncate={100}>
      <p className={`inline text-justify   mt-5 2xl:text-4xl xl:text-3xl lg:text-2xl text-2xl text-black `}>
        تقدر ترسل وتصرف حوالتك (حزمي تحويل) عبر محفظة جيب بكل سهولة وفي أي وقت. وتستفسر عن الحوالة أو تلغيها.
        <ul dir='rtl' className="list-disc   mt-5 2xl:text-3xl xl:text-2xl lg:text-xl text-xl text-black  xl:px-10 lg:px-5 px-5">
          <li><span className='text-jabi jaibFontBold'>إرسال حوالة حزمي تحويل:</span>تتيح هذه الخدمة تحويل أموالك من حسابك في جيب إلى شخص آخر ليس لديه حساب في محفظة جيب عبر خدمة حزمي تحويل.</li>
          <li><span className='text-jabi jaibFontBold'>صرف حوالة حزمي تحويل:</span>هذه الميزة تسمح لمشتركي محفظة جيب سحب حوالات حزمي تحويل إلى حسابهم في المحفظة.</li>
          <li><span className='text-jabi jaibFontBold'>حالة حوالة حزمي تحويل:</span>تتيح هذه الخدمة سحب الحوالات المالية من الشبكات المحلية لحسابك في المحفظة.</li>
          <li><span className='text-jabi jaibFontBold'>طلب صرف حوالة محلية:</span>تسمح هذه الخدمة بالاستفسار عن حالة حوالات حزمي تحويل في حال تم استلامها أم لا.</li>
          <li><span className='text-jabi jaibFontBold'>إلغاء حوالة حزمي تحويل:</span>يمكنك إلغاء أي حوالة أرسلتها عبر محفظة جيب.</li>

        </ul>
      </p>


    </StyledReadMore>,
    bg: "bg-transparent",
    hrefDiv:"hazmitahwil"
  },
  {
    title: "الشحن والسداد",
    description: "سدد عبر جيب فواتيرك بكل سهولة وأمان وراحة من بيتك وفي أي وقت.. يعني فواتير الإنترنت مثلا أو الهاتف الثابت وغيرها.. أيضا تقدر تشحن رصيد لجوالك أو لأحد معارفك سواءً لنظام الباقات أو الدفع المسبق أو نظام الفوترة لجميع شبكات الاتصالات المحلية.",
    src: "/prsanilImg/S&S.png",
    list: <StyledReadMore truncate={110}>

      <p className={`inline text-justify dis  mt-5 2xl:text-4xl xl:text-3xl lg:text-2xl text-2xl text-black `}>
        سدد عبر جيب فواتيرك بكل سهولة وأمان وراحة من بيتك وفي أي وقت.. يعني فواتير الإنترنت مثلا أو الهاتف الثابت وغيرها.. أيضا تقدر تشحن رصيد لجوالك أو لأحد معارفك سواءً لنظام الباقات أو الدفع المسبق أو نظام الفوترة لجميع شبكات الاتصالات المحلية.        </p>


    </StyledReadMore>,
    postion: "lg:order-first",
    bg: "bg-white",
    hrefDiv:"Shippingandpayment"
  },
  {
    title: "دفع المشتريات",
    description: "أي مستخدم ذكي مشترك في محفظة جيب باستطاعته أن يستبدل الدفع الكاش بالدفع الإلكتروني عبر محفظة جيب لكل مشترياته من المحلات التجارية والخدمية والمطاعم والكافيهات بسهولة وراحة، فقط من خلال مسحCODE QR أو إدخال رقم نقطة البيع.",
    src: "/prsanilImg/p&p.png",
    list: <StyledReadMore truncate={110}>

      <p className={`inline text-justify dis  mt-5 2xl:text-4xl xl:text-3xl lg:text-2xl text-2xl text-black `}>
        أي مستخدم ذكي مشترك في محفظة جيب باستطاعته أن يستبدل الدفع الكاش بالدفع الإلكتروني عبر محفظة جيب لكل مشترياته من المحلات التجارية والخدمية والمطاعم والكافيهات بسهولة وراحة، فقط من خلال مسحCODE QR أو إدخال رقم نقطة البيع.
      </p>
    </StyledReadMore>,
    bg: "bg-transparent",
    hrefDiv:"Paymentofpurchases"

  },
  {
    title: "السحب النقدي",
    description: "مع جيب تقدر إنك تسحب أموالك كاش عبر وكلاء جيب المنتشرين في مختلف المحافظات بعد تغذية حسابك عبر وكلاء جيب أيضًا أو نقاط الخدمة أو صرف حوالاتك المالية من مختلف الشبكات إلى حسابك في محفظة جيب.",
    src: "/prsanilImg/co.png",
    list: <StyledReadMore truncate={110}>

      <p className={`inline text-justify dis  mt-5 2xl:text-4xl xl:text-3xl lg:text-2xl text-2xl text-black `}>
        مع جيب تقدر إنك تسحب أموالك كاش عبر وكلاء جيب المنتشرين في مختلف المحافظات بعد تغذية حسابك عبر وكلاء جيب أيضًا أو نقاط الخدمة أو صرف حوالاتك المالية من مختلف الشبكات إلى حسابك في محفظة جيب.
      </p>
    </StyledReadMore>,
    postion: "lg:order-first",
    bg: "bg-white",
    hrefDiv:"cashOut"
  },
  {
    title: "المدفوعات",
    description: "خصصت جيب هذه الخدمة عبر (مدفوعات باس) إرسال الأموال أو استلامها من المحافظ الإلكترونية الأخرى.",
    src: "/prsanilImg/pay.png",
    list: <StyledReadMore truncate={110}>

      <p className={`inline text-justify dis  mt-5 2xl:text-4xl xl:text-3xl lg:text-2xl text-2xl text-black `}>
        خصصت جيب هذه الخدمة عبر (مدفوعات باس) إرسال الأموال أو استلامها من المحافظ الإلكترونية الأخرى.
      </p>
    </StyledReadMore>,
    bg: "bg-transparent",
    hrefDiv:"Payments"
    
  },
  {
    title: "خدمات الترفيه ",
    description: "جيب أيضا عملت حسابك كمشترك مهتم بالخدمات الترفيهية، وسهلت عليك تعاملاتك مع الألعاب ومنصات الترفيه المختلفة.",
    src: "/prsanilImg/in.png",
    list: <StyledReadMore truncate={110}>

      <p className={`inline text-justify dis  mt-5 2xl:text-4xl xl:text-3xl lg:text-2xl text-2xl text-black `}>
        جيب أيضا عملت حسابك كمشترك مهتم بالخدمات الترفيهية، وسهلت عليك تعاملاتك مع الألعاب ومنصات الترفيه المختلفة.
      </p>
    </StyledReadMore>,
    postion: "lg:order-first",
    bg: "bg-white",
    hrefDiv:"Entertainment"
  },
  {
    title: "شراء أونلاين",
    description: "هذه الخدمة تمكنك من توليد كود لاستخدامه في كافة مواقع وتطبيقات التجارة الإلكترونية التي تدعم محفظة جيب بالتعاون مع أي تطبيق شراء او خدمي ..يدفع في المحفظة.",
    src: "/prsanilImg/pon.png",
    list: <StyledReadMore truncate={110}>

      <p className={`inline text-justify dis  mt-5 2xl:text-4xl xl:text-3xl lg:text-2xl text-2xl text-black `}>
        هذه الخدمة تمكنك من توليد كود لاستخدامه في كافة مواقع وتطبيقات التجارة الإلكترونية التي تدعم محفظة جيب بالتعاون مع أي تطبيق شراء او خدمي ..يدفع في المحفظة.                  </p>
    </StyledReadMore>,
    bg: "bg-transparent",
    hrefDiv:"onlinepay"
  },
  {
    title: "أخرى",
    description: "خدمات جيب لا تنتهي ومنها إنك تقدر تعرف آخر العمليات التي قمت بها وكشف حساب تفصيلي بالتاريخ والمبلغ ونوع الخدمة التي استخدمتها.",
    src: "/prsanilImg/othr.png",
    list: <StyledReadMore truncate={110}>

      <p className={`inline text-justify dis  mt-5 2xl:text-4xl xl:text-3xl lg:text-2xl text-2xl text-black `}>
        خدمات جيب لا تنتهي ومنها إنك تقدر تعرف آخر العمليات التي قمت بها وكشف حساب تفصيلي بالتاريخ والمبلغ ونوع الخدمة التي استخدمتها.
      </p>
    </StyledReadMore>,
    postion: "lg:order-first",
    bg: "bg-white",
    hrefDiv:"Other"
  },

]
export const HowServicesCard = [
  {
    title: "للأفراد",
    src: "./BusinessImg/individual.jpg",
    list: <StyledReadMore truncate={45}>
      <p className={`inline text-justify dis  mt-5 2xl:text-4xl xl:text-3xl lg:text-2xl text-2xl text-black `}>
        كمواطن يمني، توفر جيب لك حرية وسهولة إجراءات معاملاتك المالية
        <ul dir='rtl' className="list-disc   mt-5 2xl:text-3xl xl:text-2xl lg:text-xl text-xl text-black  xl:px-10 lg:px-5 px-5">
          <li>سهولة إرسال الأموال لأصدقائك وعائلتك واستلامها.</li>
          <li>تقدر وبكل أمان تشتري عبر الإنترنت.</li>
          <li>خدمات السداد والدفع بكافة أنواعها </li>
        </ul>
      </p>


    </StyledReadMore>,
    postion: "lg:order-first ",
    bg: "bg-white",
    hrefDiv:"individual"
  },
  {
    title: "	للشركات والمؤسسات ",
    src: "./BusinessImg/comAndorg.jpg",
    list: <StyledReadMore truncate={80}>
      <p className={`inline text-justify   mt-5 2xl:text-4xl xl:text-3xl lg:text-2xl text-2xl text-black `}>
        كرجل أعمال او كصاحب قرار في أي شركة أو مؤسسة بإمكانك التسجيل في محفظة جيب والتمتع بالتالي:
        <ul dir='rtl' className="list-disc  mt-5 2xl:text-3xl xl:text-2xl lg:text-xl text-xl text-black  xl:px-10 lg:px-5 px-5">
          <li>تقليص المردود من العملة التالفة بالدفع الإلكتروني عبر تطبيق جيب.</li>
          <li>سهيل عملية تسليم رواتب الموظفين والتخلص من فوارق العملة.</li>
          <li>سهيل إدارة المدفوعات الداخلية والخارجية وتحسين الكفاءة المالية.</li>

        </ul>
      </p>


    </StyledReadMore>,
    bg: "bg-transparent",
    hrefDiv:"comandorg"
  },
  {
    title: "للوكلاء ",
    description: "سدد عبر جيب فواتيرك بكل سهولة وأمان وراحة من بيتك وفي أي وقت.. يعني فواتير الإنترنت مثلا أو الهاتف الثابت وغيرها.. أيضا تقدر تشحن رصيد لجوالك أو لأحد معارفك سواءً لنظام الباقات أو الدفع المسبق أو نظام الفوترة لجميع شبكات الاتصالات المحلية.",
    src: "./BusinessImg/Agent.jpg",
    list: <StyledReadMore truncate={80}>
    <p className={`inline text-justify   mt-5 2xl:text-4xl xl:text-3xl lg:text-2xl text-2xl text-black `}>
    أنت كصراف أو كتاجر بإمكانك أن تصبح وكيل لمحفظة جيب وتحظى بالمزايا المختلفة التي توفرها جيب وهي كالتالي:
          <ul dir='rtl' className="list-disc   mt-5 2xl:text-3xl xl:text-2xl lg:text-xl text-xl text-black  xl:px-10 lg:px-5 px-5">
        <li>تقليص المردود من العملة التالفة بالدفع الإلكتروني عبر تطبيق جيب.</li>
        <li>الحصول على عمولة عند فتح حسابات للعملاء وتوثيقها.</li>
        <li>تمنح جيب وكلائها نسبة من كل عملية سحب أو إيداع نقدي.</li>
        <li>توسيع قاعدة عملاء الوكيل من خلال الخدمات والمزايا التي تقدمها محفظة جيب له.</li>
        <li>تقدم جيب حوافز لوكلائها عند الوصول لعدد معين من النقاط.</li>

      </ul>
    </p>


  </StyledReadMore>,
    postion: "lg:order-first",
    bg: "bg-white",
    hrefDiv:"agent"
  },
  {
    title: "نقاط الخدمة",
    src: "./BusinessImg/pointOfSales.jpg",
    list: <StyledReadMore truncate={80}>
      <p className={`inline text-justify   mt-5 2xl:text-4xl xl:text-3xl lg:text-2xl text-2xl text-black `}>
      تتيح جيب لك كصاحب محل أو مركز تجاري أو خدمي( كالصيدليات والبقالات) التسجيل كنقطة خدمة، وبإمكان عميلك دفع نقاط الخدمة من محفظة جيب، وتحظى نقاط الخدمة بالمزايا التالية:
              <ul dir='rtl' className="list-disc   mt-5 2xl:text-3xl xl:text-2xl lg:text-xl text-xl text-black  xl:px-10 lg:px-5 px-5">
          <li>تقليص المردود من العملة التالفة بالدفع الإلكتروني عبر تطبيق جيب.</li>
          <li>تسهيل عملية الدفع للعميل والتخلص من فوارق العملة.</li>
          <li>توسيع قاعدة عملاء نقاط الخدمة المختلفة من خلال العروض والخصومات التي توفرها المحفظة في الدفع.</li>
          <li>تقدم محفظة جيب مساحات إعلانية في تطبيق ومنصات التواصل الخاصة بها. </li>
        </ul>
      </p>


    </StyledReadMore>,
    bg: "bg-transparent",
    hrefDiv:"pointOfSales"
  },



]
