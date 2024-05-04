'use client'
import style from "./NavBarCustams.module.css";
import Image from 'next/image';
import Link from 'next/link'
import Jabilogo from "../HelperCompoents/Jaiblogo";
import ic_topup from "../../public/SVG/ic_topup.svg"
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  BuildingStorefrontIcon,
  PhoneIcon,
  RectangleGroupIcon,
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Jaiblogo from"../../public/SVG/ic_cash_out.svg"



const navListMenuItems1 = [
  {
    title: "حزمي تحويل",
    description: "تقدر ترسل وتصرف حوالتك (حزم",
    icon: NewspaperIcon,
    src: "./SVG/ic_hazmi.svg",
    hrefDiv:"hazmitahwil"
  },
  
  {
    title: "التحويلات المالية",
    description: "تقدر من خلال جيب إرسال ...",
    icon: UserGroupIcon,
    src: "./SVG/ic_transfers.svg",
    hrefDiv:"Moneytransfers"
  },
  {
    title: "شحن و سداد",
    description: "سدد عبر جيب فواتيرك...",
    icon: Bars4Icon,
    src: "./SVG/ic_services.svg",
    hrefDiv:"Shippingandpayment"
  },
 
  {
    title: "دفع المشتريات",
    description: "أي مستخدم ذكي مشترك...",
    icon: GlobeAmericasIcon,
    src: "./SVG/ic_purchases.svg",
    hrefDiv:"Paymentofpurchases"
  },
  {
    title: "السحب النقدي",
    description: "مع جيب تقدر إنك تسحب...",
    icon: PhoneIcon,
    src: "./SVG/ic_cash_out.svg",
    hrefDiv:"cashOut"
  },

  {
    title: "المدفوعات",
    description: "خصصت جيب هذه الخدمة...",
    icon: RectangleGroupIcon,
    src: "./SVG/ic_pay.svg",
    hrefDiv:"Payments"
  },
  {
    title: "ترفيه",
    description: "جيب أيضا عملت حسابك ك...",
    icon: TagIcon,
    src: "./SVG/ic_entertainment.svg",
    hrefDiv:"Entertainment"
  },
  {
    title: "شراء أونلاين",
    description: "هذه الخدمة تمكنك من توليد...",
    icon: TagIcon,
    src: "./SVG/ic_entertainment.svg",
    hrefDiv:"onlinepay"
  },
  {
    title: "اخرى",
    description: "خدمات جيب لا تنتهي ...",
    icon: TagIcon,
    src: "./SVG/ic_other.svg",
    hrefDiv:"Other"
  },
];
const navListMenuItems2 = [
  {
    title: "للأفراد",
    description: "...كمواطن يمني، توفر",
    icon: UserGroupIcon,
    hrefDiv:"individual"
  },
  {
    title: "للوكلاء",
    description: "أنت كصراف أو كتاجر...",
    icon: BuildingOfficeIcon,
    hrefDiv:"agent"
  },
  {
    title: "الشركات و المؤسسات",
    description: "كرجل أعمال او كصاحب...",
    icon: BuildingOffice2Icon,
    hrefDiv:"comandorg"
  },
  {
    title: "نقطة الخدمة",
    description: "تتيح جيب لك كصاحب...",
    icon: BuildingStorefrontIcon,
    hrefDiv:"pointOfSales"
  },
];
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems1.map(
    ({ icon, title, description ,src ,hrefDiv }, key) => (

<Link href={`Personal/#${hrefDiv}`} key={hrefDiv} passHref={true}>
        <MenuItem placeholder={""} className={`${style.mhmdfont}   flex items-center justify-end  gap-3 rounded-lg`}>
          <div className="flex items-center   rounded-lg  p-2 ">
         
            <Image alt="" className="text-black" src={`${src}`} width={30} height={30} ></Image>
          </div>
          <div className={`${style.direction} text-right`}>
            <Typography
              placeholder={""}
              variant="h6"
              color="blue-gray"
              className={`${style.mhmdfont}    flex items-center text-sm font-bold`}
            >
              {title}
            </Typography>
            <Typography
              placeholder={""}
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>


        </MenuItem>
        </Link>

    ),
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}

      >
        <MenuHandler>
          <Link href={"/Personal"} placeholder={""}  className="font-medium">
            <ListItem
              placeholder={""}
              className={`${style.mhmdfont}  justify-end flex items-center gap-2 py-2 pr-4 font-medium text-gray-900`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              
              <p className="text-xl">شخصي</p>
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Link>
        </MenuHandler>
        <MenuList placeholder={""} className={`${style.direction} backdrop-blur-lg bg-white/75 hidden  max-w-screen-xl rounded-xl lg:block`}>
          <ul className="grid grid-cols-3 justify-items-start gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
function NavListMenuTow() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems2.map(
    ({ icon, title, description  ,hrefDiv }, key) => (
     
      <Link href={`Business/#${hrefDiv}`}>

      <MenuItem placeholder={""} className={`${style.mhmdfont}   flex items-center justify-end  gap-3 rounded-lg`}>
        <div className="flex items-center   rounded-lg  p-2 ">
       
        {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
        </div>
        <div className={`${style.direction} text-right`}>
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className={`${style.mhmdfont}    flex items-center text-sm font-bold`}
          >
            {title}
          </Typography>
          <Typography
            placeholder={""}
            variant="paragraph"
            className="text-xs !font-medium text-blue-gray-500"
          >
            {description}
          </Typography>
        </div>


      </MenuItem>
      </Link>

    ),
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}

      >
        <MenuHandler>
          <Link href={"/Business"} placeholder={""}  className="font-medium">
            <ListItem
              placeholder={""}
              className={`${style.mhmdfont}  justify-end flex items-center gap-2 py-2 pr-4 font-medium text-gray-900`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              
              <p className="text-xl">أعمال</p>
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Link>
        </MenuHandler>
        <MenuList placeholder={""} className={`${style.direction} backdrop-blur-lg bg-white/75 hidden  max-w-screen-xl rounded-xl lg:block`}>
          <ul className="grid grid-cols-3 justify-items-start gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
function NavList() {
  return (
    <List placeholder={""} className={`${style.mhmdfont}  mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1`}>
      <Link href={"/Support"}>
      
          <ListItem placeholder={""} className="flex font-medium justify-end items-center gap-2 py-2 pr-4  text-gray-900">
           
            <p className="text-xl"> الدعم و المساعدة</p>
            </ListItem>
          </Link>
          <Link href={"/Guide"}>
        <ListItem placeholder={""} className="flex items-center justify-end gap-2 py-2 pr-4  text-gray-900">
            
           <p className="text-xl">الدليل</p>
           </ListItem>

          </Link>
       

      
    


 

      <Link href={"/about"}>
        <ListItem placeholder={""} className="flex items-center justify-end gap-2 py-2 pr-4  text-gray-900">
            
           <p className="text-xl">عن جيب</p>
           </ListItem>

          </Link>
      <NavListMenuTow />
   
      <NavListMenu />

    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (

    <Navbar placeholder={""} className="sticky shadow-md  mx-auto max-w-screen-sm md:max-w-screen-xl px-4 py-2  top-7 z-10 h-max    ">
      <div className="flex items-center  justify-between text-blue-gray-900">
        <Link
        href={"/"}
          placeholder={""}
         
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          <Jabilogo />

        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">

          <Button placeholder={""} className={`${style.mhmdfont} bg-jabi text-lg px-5 py-2  `} variant="filled" size="lg">
          <p>تنزيل التطبيق</p>
          </Button>
        </div>
        <IconButton
          placeholder={""}
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button placeholder={""} variant="outlined" size="lg" className="bg-jabi text-2xl Jaibfont border-none text-white" fullWidth>
            <p>تنزيل التطبيق</p>
          </Button>

        </div>
      </Collapse>
    </Navbar>


  );
}