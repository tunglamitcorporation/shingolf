import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Flatpickr from "react-flatpickr";
import { useTranslation } from "react-i18next";
import "flatpickr/dist/themes/airbnb.css";
import { findCompanyByRequest, sendReservationRequest } from "../../api/reservation";
import { format } from "date-fns";
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import TabComponent from "../../Test";

function Reservation({token}) {
  const { t } = useTranslation();
  const location = useLocation();
  const receivedData = location.state || {};
  const navigate = useNavigate()
  const [text, setText] = useState(`${t("reservation.more")}`);
  const city = t("booking.city", { returnObjects: true });
  const branch = t("booking.branch", { returnObjects: true });
  const room = t("booking.room", { returnObjects: true });
  const payMethod = t("reservation.method", { returnObjects: true });
  const payMethod2 = t("reservation.method2", { returnObjects: true });
  const earlyInNote =t("reservation.earlyIn_note", { returnObjects: true });
  const lateOutNote =t("reservation.lateOut_note", { returnObjects: true });

  const [selectedCity, setSelectedCity] = useState('hotel-hcm');
  const [selectedBranch, setSelectedBranch] = useState('le-thanh-ton-detail');
  
  const flatBranches = [].concat(...branch);
  const filteredBranches = flatBranches.filter(
    (b) => b.city_id == selectedCity
  );
  const flatRoom = [].concat(...room);
  const filteredRoom = flatRoom.filter((r) => r.branch_id == selectedBranch);
  const cityParam = selectedCity ? selectedCity.replace(/\s+/g, "-") : "";
  const [startDate, setStartDate] = useState(
    receivedData ? receivedData.startDate : ""
  );
  const [endDate, setEndDate] = useState(
    receivedData ? receivedData.endDate : ""
  );
  const [startTime, setStartTime] = useState("15:00");
  const [endTime, setEndTime] = useState("12:00");
  const [roomAmount, setRoomAmount] = useState(1);
  const [guestAmount, setGuestAmount] = useState(1);
  const [guestInformation, setGuestInformation] = useState({
    guest1: {familyName:'', givenName: '', gender: '', day: '', month: '', year: '', secondFamilyName:'', secondGivenName:'',secondGender:'', secondDay:'', secondMonth:'', secondYear:'', booker:'',bookerName:'', email:'', phone:'', roomType:'',contract:'',company:'',discount:'', vat:'', payMethod:''},
    guest2: {familyName:'', givenName: '', gender: '', day: '', month: '', year: '', roomType:'',contract:'',company:'',discount:'', vat:'', payMethod:''},
    guest3: {familyName:'', givenName: '', gender: '', day: '', month: '', year: '', roomType:'',contract:'',company:'',discount:'', vat:'', payMethod:''},
    guest4: {familyName:'', givenName: '', gender: '', day: '', month: '', year: '', roomType:'',contract:'',company:'',discount:'', vat:'', payMethod:''},
    guest5: {familyName:'', givenName: '', gender: '', day: '', month: '', year: '', roomType:'',contract:'',company:'',discount:'', vat:'', payMethod:''},

  })
  const [familyName, setFamilyName] = useState('');
  const [givenName, setGivenName] = useState('');
  const [secondFamilyName, setSecondFamilyName] = useState('');
  const [secondGivenName, setSecondGivenName] = useState('');
  const [secondGender, setSecondGender] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [SecondSelectedDay, setSecondSelectedDay] = useState('');
  const [SecondSelectedMonth, setSecondSelectedMonth] = useState('');
  const [SecondSelectedYear, setSecondSelectedYear] = useState('');
  const [gender, setGender] = useState('');
  const [company, setCompany] = useState('');
  const [booker, setBooker] = useState(`${t('reservation.same-person')}`);
  const [bookerName, setBookerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [roomType, setRoomType] = useState('');
  const [contract, setContract] = useState('');
  const [vat, setVat] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [pickupNumber, setPickupNumber] = useState('');
  const [dropOffTime, setDropOffTime] = useState('');
  const [dropOffNumber, setDropOffNumber] = useState('');
  const [earlyIn, setEarlyIn] = useState('');
  const [lateOut, setLateOut] = useState('');
  const [discount, setDiscount] = useState('');
  const [searchCompany, setSearchCompany] = useState([]); 

  const [tabs, setTabs] = useState(['Room 1']);
  const [activeTab, setActiveTab] = useState(0);
console.log(searchCompany);
  const handleInputChange = (tabId, inputName, value) => {
    setGuestInformation((prevState) => ({
      ...prevState,
      [tabId]: {
        ...prevState[tabId],
        [inputName]: value,
      },
    }));
  };
  const handleRadioChange = (tabId, inputName, value) => {
    setGuestInformation((prevState) => ({
      ...prevState,
      [tabId]: {
        ...prevState[tabId],
        [inputName]: value,
      },
    }));
  };
  useEffect(() => {
    updateTabs();
  }, [roomAmount]);
  const updateTabs = () => {
    let numTabsToShow = parseInt(roomAmount, 10);
    let newTabs = [];

    for (let i = 1; i <= numTabsToShow; i++) {
      newTabs.push(`Room ${i}`);
    }
    setTabs(newTabs);
    setActiveTab(0); // Set active tab to the first tab
  };

  const handleSelectChange = (e) => {
    setRoomAmount(e.target.value);
  };
  const handleSave = () => {
    // Log specific content from the state object
    console.log("Tab 1:", guestInformation.guest1);
  }

  handleSave()
  const [familyNameRoom2, setFamilyNameRoom2] = useState('');
  const [givenNameRoom2, setGivenNameRoom2] = useState('');
  const [selectedDayRoom2, setSelectedDayRoom2] = useState('Day');
  const [selectedMonthRoom2, setSelectedMonthRoom2] = useState('Month');
  const [selectedYearRoom2, setSelectedYearRoom2] = useState('Year');
  const [genderRoom2, setGenderRoom2] = useState('Mr.');
  const [bookerRoom2, setBookerRoom2] = useState(`${t('reservation.same-person')}`);
  const [bookerNameRoom2, setBookerNameRoom2] = useState('');
  const [emailRoom2, setEmailRoom2] = useState('');
  const [phoneRoom2, setPhoneRoom2] = useState('');
  const [roomTypeRoom2, setRoomTypeRoom2] = useState(`${t("reservation.non-smk")}`);
  const [contractRoom2, setContractRoom2] = useState("No Contract");
  const [vatRoom2, setVatRoom2] = useState('');
  const [paymentMethodRoom2, setPaymentMethodRoom2] = useState('');

  const handleBranchValue = (cityId) => {
    switch(cityId) {
       case 'hotel-hcm':
        setSelectedBranch('le-thanh-ton-detail')
        break;
      case 'hotel-hn':
        setSelectedBranch('hai-ba-trung-detail')
        break;
      case 'hotel-dn': 
        setSelectedBranch('da-nang');
        break;
      case 'hotel-hp':
        setSelectedBranch('hai-phong');
        break;
      default:
        setSelectedBranch('');
    }
  };
  const handleCityChange = (e) => {
    const cityId = e.target.value;
    setSelectedCity(cityId);
    handleBranchValue(cityId);
  };

  const handleStartTimeChange = (selectedDates) => {
    if (selectedDates.length > 0) {
      const selectedDate = new Date(selectedDates[0]);
      const timeString = selectedDate.toTimeString().split(" ")[0];
      setStartTime(timeString);
    } else {
      setStartTime(null);
    }
  };
  const handleEndTimeChange = (selectedDates) => {
    if (selectedDates.length > 0) {
      const selectedDate = new Date(selectedDates[0]);
      const timeString = selectedDate.toTimeString().split(" ")[0];
      setEndTime(timeString);
    } else {
      setEndTime(null);
    }
  };
  const handlePickUpTimeChange = (selectedDates) => {
    if (selectedDates.length > 0) {
      const selectedDate = new Date(selectedDates[0]);
      const timeString = selectedDate.toTimeString().split(" ")[0];
      setPickupTime(timeString);
    } else {
      setPickupTime(null);
    }
  };
  const handleDropOffTimeChange = (selectedDates) => {
    if (selectedDates.length > 0) {
      const selectedDate = new Date(selectedDates[0]);
      const timeString = selectedDate.toTimeString().split(" ")[0];
      setDropOffTime(timeString);
    } else {
      setDropOffTime(null);
    }
  };
  const handleEarlyInTimeChange = (selectedDates) => {
    if (selectedDates.length > 0) {
      const selectedDate = new Date(selectedDates[0]);
      const timeString = selectedDate.toTimeString().split(" ")[0];
      setEarlyIn(timeString);
    } else {
      setEarlyIn(null);
    }
  };
  const handleLateOutTimeChange = (selectedDates) => {
    if (selectedDates.length > 0) {
      const selectedDate = new Date(selectedDates[0]);
      const timeString = selectedDate.toTimeString().split(" ")[0];
      setLateOut(timeString);
    } else {
      setLateOut(null);
    }
  };
  
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(0);
  const [statusC, setStatusC] = useState(0);
  const [statusPU, setStatusPU] = useState(false);
  const [statusDO, setStatusDO] = useState(false);
  const [statusEI, setStatusEI] = useState(false);
  const [statusLO, setStatusLO] = useState(false);
  const [showButton, setShowButton] = useState(1);
  const inputRef = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const input5Ref = useRef(null);
  const input6Ref = useRef(null);
  useEffect(() => {
    if (receivedData && receivedData.selectedCity) {
      setSelectedCity(receivedData.selectedCity);
    }
    if (receivedData && receivedData.selectedBranch) {
      setSelectedBranch(receivedData.selectedBranch);
    }
  }, [receivedData]);
  const [selectedRoom, setSelectedRoom] = useState(
    receivedData ? receivedData.selectedRoom : ""   
  );
  useEffect(() => {
    if (show) {
      inputRef.current.focus();
    }
  }, [show]);
  useEffect(() => {
    if (status === 1) {
      input3Ref.current.focus();
    }
  }, [status]);
  useEffect(() => {
    if (statusC === 1) {
      input4Ref.current.focus();
    }
  }, [statusC]);
  const handleChangeBookerName = (e) => {
    setBookerName(e.target.value);
  };
  const handleChangeCompanyName = (e) => {
    handleInputChange('guest1', 'company', e.target.value);

    if(guestInformation.guest1.company) {
   const timer = setTimeout(() => {
        findCompanyByRequest(guestInformation.guest1.company, token)
        .then(response => {
          setSearchCompany(response.data.company)
        })
        .catch(error => {
            console.log(error);
        }, 3000)
      })
      return () => clearTimeout(timer)
    }else{
      setSearchCompany('')
    }
  };
  const handleSecondFamilyName = (e) => {
    const newValue = e.target.value;
    setSecondFamilyName(newValue);
  };
  const handleSecondGivenName = (e) => {
    const newValue = e.target.value;
    setSecondGivenName(newValue);
  };
  const handleSecondFamilyNameClick = () => {
    inputRef.current.focus();
  };
  const handleSecondGivenNameClick = () => {
    input2Ref.current.focus();
  };
  const handleClick = () => {
    text === t("reservation.more")
      ? setText(t("reservation.remove"))
      : setText(t("reservation.more"));
    setShow(!show);
  };
  const handleSelected = (status, e) => {
    setStatus(status);
  };
  const handleSelectedCompany = (statusC) => {
    setStatusC(statusC);
  };
  const handleChooseCompany = (value) => {
    handleInputChange('guest1', 'company', value)
    setSearchCompany('')
  }
  const handlePickupNumber = (e) => {
    const newValue = e.target.value;
    setPickupNumber(newValue);
  };
  const handlePickUpNumberClick = () => {
    input5Ref.current.focus();
  };
  const handleDropOffNumber = (e) => {
    const newValue = e.target.value;
    setDropOffNumber(newValue);
  };
  const handleDropOffNumberClick = () => {
    input6Ref.current.focus();
  };
  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const [errors, setErrors] = useState({})
  
  const validateForm = () => {
    let errors = {}
    let isVaLid = true

    if (!selectedCity) {
      errors.selectedCity = 'required';
      isVaLid = false
    } else {
      errors.selectedCity = ''
    }

    if (!selectedBranch) {
      errors.selectedBranch = 'required';
      isVaLid = false
    } else {
      errors.selectedBranch = ''
    }

    if (!startDate) {
      errors.startDate = 'required';
      isVaLid = false
    } 
    if (!endDate) {
      errors.endDate = 'required';
      isVaLid = false

    } 
    if (!selectedRoom) {
      errors.selectedRoom = 'required';
      isVaLid = false

    } 
    if (!roomAmount) {
      errors.roomAmount = 'required';
      isVaLid = false

    } 
    if (!guestAmount) {
      errors.guestAmount = 'required';
      isVaLid = false

    } 
    if (!familyName) {
      errors.familyName = 'required';
      isVaLid = false

    } 
    if (!givenName ) {
      errors.givenName = 'required';
      isVaLid = false

    } 
    if (!gender) {
      errors.gender = 'required';
      isVaLid = false

    } 
    if (!selectedDay) {
      errors.selectedDay = 'required';
      isVaLid = false

    } 
    if (!selectedMonth) {
      errors.selectedMonth = 'required';
      isVaLid = false

    } 
    if (!selectedYear) {
      errors.selectedYear = 'required';
      isVaLid = false

    } 
    if (!email) {
      errors.email = 'required';
      isVaLid = false

    }  else if (!validateEmail(email)) {
      errors.email = 'Invalid email format';
      isVaLid = false

    }
    if (!phone) {
      errors.phone = 'required';
      isVaLid = false

    } 
    setErrors(errors);
    return isVaLid
  }
  const handleSubmit = async(e) => {
    function getCityValue(value){
      switch(value){
        case 'hotel-hn': return "Ha Noi"
        case 'hotel-hcm': return "Ho Chi Minh"
        case 'hotel-dn': return "Da Nang"
        case 'hotel-hp': return "Hai Phong"
      }
    }
    function getBranchValue(value){
      switch(value){
        case 'thai-van-lung-1-detail': return "Thai Van Lung 1"
        case 'thai-van-lung-2-detail': return "Thai Van Lung 2"
        case 'le-thanh-ton-detail': return "Le Thanh Ton"
        case 'annex-detail': return "Azumaya Annex"
        case 'hai-ba-trung-detail': return "Hai Ba Trung 1"
        case 'kim-ma-2-detail': return "Kim Ma 2"
        case 'kim-ma-3-detail': return "Kim Ma 3"
        case 'linh-lang-detail': return "Linh Lang"
        case 'hai-phong': return "Hai Phong"
        case 'da-nang': return "Da Nang"
      }
    }
    const dataObject = {
        saveCityValue: getCityValue(selectedCity),
        saveBranchValue : getBranchValue(selectedBranch),
        startDate: startDate ? format(startDate, 'yyyy-MM-dd') : '',
        endDate: endDate ? format(endDate, 'yyyy-MM-dd') :'',
        startTime ,
        endTime ,
        selectedRoom ,
        roomAmount ,
        guestAmount ,
        familyName ,
        givenName ,
        gender ,
        selectedDay ,
        selectedMonth ,
        selectedYear ,
        secondFamilyName ,
        secondGivenName ,
        SecondSelectedDay ,
        SecondSelectedMonth ,
        SecondSelectedYear ,
        secondGender ,
        bookerName ,
        booker ,
        email ,
        phone ,
        roomType ,
        contract ,
        company ,
        discount ,
        vat ,
        paymentMethod ,
        pickupTime ,
        pickupNumber ,
        dropOffTime ,
        dropOffNumber ,
        earlyIn ,
        lateOut ,
        specialRequest
    }
    console.log(dataObject);
      e.preventDefault();
      if (validateForm()) {
        const token= "73344833-5b52-4403-9255-695907647688"
        const source = await sendReservationRequest(dataObject, token)
        navigate(`/thank-you/${cityParam}`)
      } else {
        const validateError = document.querySelector('.validate_failed')
                  if(validateError) {
                    validateError.scrollIntoView({behavior:'smooth', block:'center'})
                  }
      }  
    };
  function DayPicker({guest}) {
    const minDay = 1;
    const maxDay = 31;
    const birthDay = 0;
    const onHandleChange = (e) => {
      handleInputChange('guest1', 'day', e.target.value);
    };
    const options = [];
    for (let i = minDay; i <= maxDay; i++) {
      const day = birthDay + i;
      options.push(
        <option value={day} key={day}>
          {day}
        </option>
      );
    }
    return (
      <select
        className={errors.selectedDay? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
        value={guest}
        onChange={onHandleChange}
      >
        <option className="first-opt" disabled selected>
          {t("reservation.day")}
        </option>
        {options}
      </select>
    );
  }
  function MonthPicker({guest}) {
    const minMonth = 0;
    const maxMonth = 11;
    const birthMonth = 1;

    const onHandleChange = (e) => {
      handleInputChange('guest1', 'month', e.target.value);
    };
    const options = [];
    for (let i = minMonth; i <= maxMonth; i++) {
      const month = birthMonth + i;
      options.push(
        <option value={month} key={month}>
          {month}
        </option>
      );
    }
    return (
      <select
        className={errors.selectedMonth? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
        value={guest}
        onChange={onHandleChange}
      >
        <option className="first-opt" disabled selected>
          {t("reservation.month")}
        </option>
        {options}
      </select>
    );
  }
  function YearPicker({guest}) {
    const minYear = 1925;
    const maxYear = 2005;
    const birthYear = 0;

    const onHandleChange = (e) => {
      handleInputChange('guest1', 'year', e.target.value);
    };
    const options = [];
    for (let i = minYear; i <= maxYear; i++) {
      const year = birthYear + i;
      options.push(
        <option value={year} key={year}>
          {year}
        </option>
      );
    }
    return (
      <select
        className={errors.selectedYear? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
        value={guest}
        onChange={onHandleChange}
      >
        <option className="first-opt" disabled selected>
          {t("reservation.year")}
        </option>
        {options}
      </select>
    );
  }
  function SecondDayPicker() {
    const minDay = 1;
    const maxDay = 31;
    const birthDay = 0;
    const onHandleChange = (e) => {
      setSecondSelectedDay(e.target.value);
    };
    const options = [];
    for (let i = minDay; i <= maxDay; i++) {
      const day = birthDay + i;
      options.push(
        <option value={day} key={day}>
          {day}
        </option>
      );
    }
    return (
      <select
        className="col-md-2 form__content"
        value={SecondSelectedDay}
        onChange={onHandleChange}
      >
        <option className="first-opt" disabled selected>
          {t("reservation.day")}
        </option>
        {options}
      </select>
    );
  }
  function SecondMonthPicker() {
    const minMonth = 0;
    const maxMonth = 11;
    const birthMonth = 1;

    const onHandleChange = (e) => {
      setSecondSelectedMonth(e.target.value);
    };
    const options = [];
    for (let i = minMonth; i <= maxMonth; i++) {
      const month = birthMonth + i;
      options.push(
        <option value={month} key={month}>
          {month}
        </option>
      );
    }
    return (
      <select
        className="col-md-2 form__content"
        value={SecondSelectedMonth}
        onChange={onHandleChange}
      >
        <option className="first-opt" disabled selected>
          {t("reservation.month")}
        </option>
        {options}
      </select>
    );
  }
  function SecondYearPicker() {
    const minYear = 1925;
    const maxYear = 2005;
    const birthYear = 0;

    const onHandleChange = (e) => {
      setSecondSelectedYear(e.target.value);
    };
    const options = [];
    for (let i = minYear; i <= maxYear; i++) {
      const year = birthYear + i;
      options.push(
        <option value={year} key={year}>
          {year}
        </option>
      );
    }
    return (
      <select
        className="col-md-2 form__content"
        value={SecondSelectedYear}
        onChange={onHandleChange}
      >
        <option className="first-opt" disabled selected>
          {t("reservation.year")}
        </option>
        {options}
      </select>
    );
  }
  return ( 
    <div>
      <HelmetLayout 
        title= "東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル - Azumaya,ハノイとダナン、ホーチミンにあるこだわりの和朝食と露天風呂、ビジネスパーソン向けホテルの東屋ベトナムホテル"
        description="Information on the Ha noi Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease."
        pagelink="http://tunglam.site/"
        og_description="Information on the Ha noi Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease."
        og_sitename="東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル - Azumaya,ハノイとダナン、ホーチミンにあるこだわりの和朝食と露天風呂、ビジネスパーソン向けホテルの東屋ベトナムホテル"
        og_type="website"
        
    />
      {/* <Helmet>
      <meta name="robots" content="max-image-preview:large" />
		<link rel="canonical" href="https://azumayavietnam.com/reservation/" />
		<meta property="og:locale" content="en_US" />
		<meta property="og:site_name" content="東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル - Azumaya,ハノイとダナン、ホーチミンにあるこだわりの和朝食と露天風呂、ビジネスパーソン向けホテルの東屋ベトナムホテル" />
		<meta property="og:type" content="article" />
    <meta  property="og:description" content="The Azumaya Hotel welcomes business travelers with comfortable accommodations and modern amenities tailored to their needs. Enjoy a relaxing stay with our spacious rooms, complimentary Wi-Fi, and convenient location near major business districts. Book your reservation today for a seamless travel experience." />
		<meta property="og:title" content="Reservation - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル" />
		<meta property="og:url" content="https://azumayavietnam.com/reservation/" />
    <meta property="og:image" content="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/rd2qg5wkfxdoarlvcuwl.jpg" />
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content="Reservation - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル" />
    <script type="application/ld+json" class="aioseo-schema">
			{`"@context":"https:\/\/schema.org","@graph":[{"@type":"WebSite","@id":"https:\/\/azumayavietnam.com\/#website","url":"https:\/\/azumayavietnam.com\/","name":"\u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","description":"Azumaya,\u30cf\u30ce\u30a4\u3068\u30c0\u30ca\u30f3\u3001\u30db\u30fc\u30c1\u30df\u30f3\u306b\u3042\u308b\u3053\u3060\u308f\u308a\u306e\u548c\u671d\u98df\u3068\u9732\u5929\u98a8\u5442\u3001\u30d3\u30b8\u30cd\u30b9\u30d1\u30fc\u30bd\u30f3\u5411\u3051\u30db\u30c6\u30eb\u306e\u6771\u5c4b\u30d9\u30c8\u30ca\u30e0\u30db\u30c6\u30eb","inLanguage":"en-US","publisher":{"@id":"https:\/\/azumayavietnam.com\/#organization"}},{"@type":"Organization","@id":"https:\/\/azumayavietnam.com\/#organization","name":"\u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","url":"https:\/\/azumayavietnam.com\/"},{"@type":"BreadcrumbList","@id":"https:\/\/azumayavietnam.com\/reservation\/#breadcrumblist","itemListElement":[{"@type":"ListItem","@id":"https:\/\/azumayavietnam.com\/#listItem","position":1,"item":{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/","name":"Home","description":"Azumaya,\u30cf\u30ce\u30a4\u3068\u30c0\u30ca\u30f3\u3001\u30db\u30fc\u30c1\u30df\u30f3\u306b\u3042\u308b\u3053\u3060\u308f\u308a\u306e\u548c\u671d\u98df\u3068\u9732\u5929\u98a8\u5442\u3001\u30d3\u30b8\u30cd\u30b9\u30d1\u30fc\u30bd\u30f3\u5411\u3051\u30db\u30c6\u30eb\u306e\u6771\u5c4b\u30d9\u30c8\u30ca\u30e0\u30db\u30c6\u30eb","url":"https:\/\/azumayavietnam.com\/"},"nextItem":"https:\/\/azumayavietnam.com\/reservation\/#listItem"},{"@type":"ListItem","@id":"https:\/\/azumayavietnam.com\/reservation\/#listItem","position":2,"item":{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/reservation\/","name":"Reservation","url":"https:\/\/azumayavietnam.com\/reservation\/"},"previousItem":"https:\/\/azumayavietnam.com\/#listItem"}]},{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/reservation\/#webpage","url":"https:\/\/azumayavietnam.com\/reservation\/","name":"Reservation - \u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","inLanguage":"en-US","isPartOf":{"@id":"https:\/\/azumayavietnam.com\/#website"},"breadcrumb":{"@id":"https:\/\/azumayavietnam.com\/reservation\/#breadcrumblist"},"datePublished":"2020-07-15T07:43:27+07:00","dateModified":"2023-11-02T07:14:56+07:00"}]`}
		</script>
      </Helmet> */}
    <div className="reservation__content">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>{t("reservation.title")}</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="re__breadcrumb">
            <ul className="breadcrumb__list">
              <li className="breadcrumb__item">
                <Link to="/">
                  <i className="fa-solid fa-house"></i>
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title">
                  {t("reservation.title")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <form onSubmit={handleSubmit}>
    <div className="container">
      <div className=" reservation__container">
        <div className="reserve-container">
          <div className="row">
            <div className="col-md-2 name__title">
              {t("reservation.choice")}
              <span className="required__note">*</span>
            </div>
            <select
                className ={errors.selectedCity ? "col-md-2 form__content validate_failed" : "col-md-2 form__content " }
                value={selectedCity}
                id={selectedCity}
                onChange={handleCityChange}
                >
                {city.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.city_name}
                  </option>
                ))}
              </select>
              {errors.selectedCity &&
                <p className="col-md-1 error-message">{errors.selectedCity}</p>
              }
              <select
                className={errors.selectedBranch ? "col-md-2 form__content validate_failed" : "col-md-2 form__content " }
                value={selectedBranch}
                disabled={!selectedCity}
                onChange={(e)=> setSelectedBranch(e.target.value)}
                >
                {filteredBranches.map((item) => (
                  <option key={item.branch_id} value={item.branch_id}>
                    {item.branch_name}
                  </option>
                ))}
              </select>
              {errors.selectedBranch && 
                <p className="col-md-1 error-message">{errors.selectedBranch}</p>
              }
          </div>
          <div className="row">
            <div className="col-md-2 name__title">
              {t("reservation.check-in")}
              <span className="required__note">*</span>
            </div>
            <Flatpickr
              value={startDate}
              options={{
                minDate: "today",
                dateFormat: "Y-m-d",
              }}
              className={errors.startDate? "col-md-2 form__content webkit-appearance validate_failed" : "col-md-2 form__content webkit-appearance" }
              placeholder={t("booking.date_in")}
              onChange={(dates) => {
                setStartDate(dates[0]);
              }}
            />
            {errors.startDate && 
                <p className="col-md-1 error-message">{errors.startDate}</p>}
            <div className="col-md-2 offset-2 name__title check-out-date">
              {t("reservation.check-out")}
              <span className="required__note">*</span>
            </div>
            <Flatpickr
              value={endDate}
              options={{
                minDate: new Date(startDate),
                dateFormat: "Y-m-d",
              }}
              className={errors.endDate? "col-md-2 form__content webkit-appearance validate_failed" : "col-md-2 form__content webkit-appearance" }
              placeholder={t("booking.date_out")}
              onChange={(dates) => {
                setEndDate(dates[0]);
              }}
            />
             {errors.endDate && 
                <p className="col-md-1 error-message">{errors.endDate}</p>}
          </div>
          <div className="row">
            <div className="col-md-2 name__title">
              {t("reservation.in-time")}
              <small style={{ fontWeight: "600" }}>
                {t("reservation.in-note")}
              </small>
            </div>
            <Flatpickr
              value={startTime}
              options={{
                enableTime: true,
                noCalendar: true,
                minTime: "01:00",
                maxTime: "00:00",
                time_24hr: true,
              }}
              placeholder={t("reservation.in-time")}
              onChange={handleStartTimeChange}
              className="col-md-2 form__content webkit-appearance"
            />
            <div className="col-md-2 offset-2 name__title check-out-time">
              {t("reservation.out-time")}
              <small style={{ fontWeight: 600 }}>
                {t("reservation.out-note")}
              </small>
            </div>
            <Flatpickr
              value={endTime}
              options={{
                enableTime: true,
                noCalendar: true,
                minTime: "12:00",
                maxTime: "00:00",
                time_24hr: true,
              }}
              placeholder={t("reservation.out-time")}
              onChange={handleEndTimeChange}
              className="col-md-2 form__content webkit-appearance"
            />
               <span className="col-md-4 required__note offset-md-8">
                {t('reservation.out-timeNote')}
              </span>
          </div>
          <div className="row">
            <div className="col-md-2 name__title">
              {t("reservation.room-kind")}
              <span className="required__note">*</span>
            </div>
            <select
              value={selectedRoom}
              className={errors.selectedRoom? "col-md-4 form__content validate_failed" : "col-md-4 form__content" }
              onChange={(e) => {
                setSelectedRoom(e.target.value);
              }}
            >
              {filteredRoom.map((item) => (
                <option key={item.room_name} value={item.room_name}>
                  {item.room_name} <span>{item.price}</span>{" "}
                </option>
              ))}
            </select>
            {errors.selectedRoom && 
                <p className="col-md-1 error-message">{errors.selectedRoom}</p>}
          </div>
          <div className="row">
            <div className="col-md-2 name__title">
              {t("reservation.room-amount")}
              <span className="required__note">*</span>
            </div>
            <select
                className="col-md-2 form__content "
                value={roomAmount}
                onChange={handleSelectChange}
                >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
             {errors.roomAmount && 
                <p className="col-md-1 error-message">{errors.roomAmount}</p>}
            <div className="col-md-2 offset-0 offset-md-2 name__title">
              {t("reservation.guest-amount")}
              <span className="required__note">*</span>
            </div>
            <input
              type="number"
              min={1}
              max={4}
              value={showButton}
              className={errors.guestAmountAmount? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
              onChange={(e) => {
                setGuestAmount(e.target.value);
                setShowButton(e.target.value);
              }}
            />
             {errors.guestAmount && 
                <p className="col-md-2 error-message">{errors.guestAmount}</p>}
          </div>
        </div>
        {/* <h3 className="red">*Notice</h3>
        <p style={{width: "500px", fontSize: '1.2rem'}}>Currently, the 'Reserve from 2 rooms' function is undergoing maintenance. Please reserve only 1 room at this time. If you need to reserve more than 1 room, kindly contact the reception directly <span className="red">(email or hotel hot-line) </span>at the branch you wish to stay at. <br/> We apologize for any inconvenience this may cause.</p>
        <p style={{fontSize: '1.2rem'}}>Best regards, <br/>
        Azumaya IT Team</p> */}
        <Tabs className="container p-0">
          <TabPanel>
            <Tabs 
            selectedIndex={activeTab}
            onSelect={(index) => setActiveTab(index)}
            selectedTabClassName="service__active" 
            className="col-md-12 p-0">
              <TabList className="service__list">
                {tabs.map((tab, index) => (
                  <Tab className="service" key={index}>{tab} 
                  </Tab>
                ))}
              </TabList>
              {/* GUEST INFORMATION 1 */}
                <TabPanel>
                <div className="guest-container">
         <div className="row">
           <div className="guest__information">
             <div className="col-md-12 guest__name-title">
               {t("reservation.guest-info")} 1
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.name")}
                 <span className="required__note">*</span>
                 <small>{t("reservation.name-note")}</small>
               </div>
               <input
                 placeholder={t("reservation.family-name")}
                 type="text"
                 className={errors.familyName? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 onChange={(e) => handleInputChange('guest1','familyName', e.target.value)}
               />
                {errors.familyName && 
               <p className="col-md-1 error-message">{errors.familyName}</p>}
               <input
                 placeholder={t("reservation.given-name")}
                 type="text"
                 name="gName"
                 className={errors.givenName? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 onChange={(e) => handleInputChange('guest1','givenName', e.target.value)}
               />
                {errors.givenName && 
               <p className="col-md-1 error-message">{errors.givenName}</p>}
               <span className="col-md-4 required__note">
                 {t("reservation.name-required")}
               </span>
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.gender")}
                 <span className="required__note">*</span>
               </div>
               <div className={errors.gender? "col-md-2 form__group validate_failed" : "col-md-2 form__group"}>
                 <input
                   type="radio"
                   name="gender"
                   id="gMale"
                   value="Mr."
                   checked={guestInformation.guest1.gender === "Mr."}
                   onChange={(e) => handleRadioChange('guest1', 'gender',e.target.value)}
                   
                 />
                 <label htmlFor="gMale">{t("reservation.mr")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="gender"
                   id="gFemale"
                   value="Ms."
                   checked = {guestInformation.guest1.gender === "Ms."}
                   onChange={(e) => handleRadioChange('guest1', 'gender',e.target.value)}
                 />
                 <label htmlFor="gFemale">{t("reservation.ms")}</label>
               </div>
               {errors.gender && 
               <p className="col-md-2 error-message">{errors.gender}</p>}
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.birth-date")}
                 <span className="required__note">*</span>
               </div>
               <DayPicker guest={guestInformation.guest1.day} />
               {errors.selectedDay && 
               <p className="col-md-1 error-message">{errors.selectedDay}</p>}
               <MonthPicker guest={guestInformation.guest1.month} />
               {errors.selectedMonth&& 
               <p className="col-md-1 error-message">{errors.selectedMonth}</p>}
               <YearPicker guest={guestInformation.guest1.year} />
               {errors.selectedYear && 
               <p className="col-md-1 error-message">{errors.selectedYear}</p>}
             </div>
             {showButton >= 2 && (
               <div className="row">
                 <div className="col-md-12 offset-4">
                   <button
                    type="button"
                     className="base__btn btn__send"
                     onClick={handleClick}
                   >
                     {text}
                   </button>
                 </div>
                 {show && (
                   <div className="container">
                     <div className="row guest-information">
                       <div className="col-md-2 name__title">
                         {t("reservation.name")}
                       </div>
                       <input
                         ref={inputRef}
                         placeholder={t("reservation.family-name")}
                         type="text"
                         className="col-md-2 form__content"
                         value={secondFamilyName}
                         onClick={handleSecondFamilyNameClick}
                         onChange={handleSecondFamilyName}
                       />

                       <input
                         ref={input2Ref}
                         placeholder={t("reservation.given-name")}
                         type="text"
                         className=" col-md-2 form__content"
                         value={secondGivenName}
                         onClick={handleSecondGivenNameClick}
                         onChange={handleSecondGivenName}
                       />
                     </div>
                     <div className="row">
                       <div className="col-md-2 name__title">
                         {t("reservation.gender")}
                       </div>
                       <div className="col-md-2">
                         <input
                           type="radio"
                           name="2ndgender"
                           id="2ndgMale"
                           value="male"
                           onChange={(e) => setSecondGender(e.target.value)}
                         />
                         <label htmlFor="gMale">{t("reservation.mr")}</label>
                       </div>
                       <div className="col-md-2">
                         <input
                           type="radio"
                           name="2ndgender"
                           id="2ndgFemale"
                           value="female"
                           onChange={(e) => setSecondGender(e.target.value)}
                         />
                         <label htmlFor="2ndgFemale">
                           {t("reservation.ms")}
                         </label>
                       </div>
                     </div>
                     <div className="row">
                       <div className="col-md-2 name__title">
                         {t("reservation.birth-date")}
                       </div>
                       <SecondDayPicker />
                       <SecondMonthPicker />
                       <SecondYearPicker />
                     </div>
                   </div>
                 )}
               </div>
             )}
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.booker")}
               </div>
               <div className="col-md-6">
                 <input
                   type="radio"
                   name="Booker"
                   id="booker"
                   value={`${t('reservation.same-person')}`}
                   checked={status === 0}
                   onClick={(e) => {
                     handleSelected(0);
                    
                   }}
                   onChange={(e) => handleInputChange('guest1', 'booker',e.target.value)}
                 />
                 <label htmlFor="booker">
                   {t("reservation.same-person")}
                 </label>
                 <br />
                 <input
                   type="radio"
                   name="Booker"
                   id="booker"
                   value={`${t('reservation.diff-person')}`}
                   checked={status === 1}
                   onClick={(e) => {
                     handleSelected(1);
                     
                   }}
                   onChange={(e) => handleInputChange('guest1', 'booker', e.target.value)}
                 />
                 <label htmlFor="booker">
                   {t("reservation.diff-person")}
                 </label>
               </div>
             </div>
             {status === 1 && 
              <div className="row">
              <div className="col-md-2 name__title">{t("reservation.name")}</div>
              <input
                ref={input3Ref}
                type="text"
                className="booker-name form__content col-md-2"
                value={guestInformation.guest1.bookerName}
                placeholder={t("reservation.name")}
                onChange={(e) => handleInputChange('guest1', 'bookerName', e.target.value)}
              />
            </div>}
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.email")}
                 <span className="col-md-2 required__note">*</span>
               </div>
               <input
                 type="text"
                 className={errors.email? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 placeholder={t("reservation.email")}
                 onChange={(e) => handleInputChange('guest1', 'email', e.target.value)}
               />
               <span className="col-md-6 required__note">
                 {t("reservation.email-note")}
               </span>
               {errors.email && 
               <p className="col-md-1 error-message">{errors.email}</p>}
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.phone")}
                 <span className="col-md-2 required__note">*</span>
               </div>
               <input
                 type="text"
                 className={errors.phone? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 id=""
                 placeholder={t("reservation.phone")}
                 onKeyPress={(event) => {
                   if (!/[0-9]/.test(event.key)) {
                     event.preventDefault();
                   }
                 }}
                 onChange={(e) => handleInputChange('guest1', 'phone', e.target.value)}
               />
               <span className="col-md-6 required__note">
                 {t("reservation.phone-note")}
               </span>
               {errors.phone && 
               <p className="col-md-1 error-message">{errors.phone}</p>}
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.room-type")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="roomType"
                   id="smk"
                   value={t("reservation.smk")}                       
                   checked =  {guestInformation.guest1.roomType === 'Smoking'}
                   onClick={(e) => handleInputChange('guest1', 'roomType', e.target.value)}
                 />
                 <label htmlFor="smk">{t("reservation.smk")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="roomType"
                   id="no-smk"
                   checked = {guestInformation.guest1.roomType === 'Non Smoking'}
                   value={t("reservation.non-smk")}
                   onClick={(e) => handleInputChange('guest1', 'roomType', e.target.value)}
                 />
                 <label htmlFor="no-smk">{t("reservation.non-smk")}</label>
               </div>
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.contract")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   id="hContract"
                   className="Contract"
                   value={t("reservation.n-cont")}
                   checked={statusC == 0}
                   onClick={(e) => {
                     handleInputChange('guest1', 'contract', e.target.value)
                     handleSelectedCompany(0);
                   }}
                 />
                 <label htmlFor="hContract">{t("reservation.n-cont")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="contract"
                   id="hContract"
                   className="Contract"
                   value={t("reservation.h-cont")}
                   checked={statusC == 1}
                   onClick={(e) => {
                     handleInputChange('guest1', 'contract', e.target.value)
                     handleSelectedCompany(1);
                   }}
                 />
                 <label htmlFor="hContract">{t("reservation.h-cont")}</label>
               </div>
             </div>
             {statusC == 1 && 
               <div className="row">
               <div className="col-md-2 name__title">{t("reservation.company")}</div>
               <input
                 ref={input4Ref}
                 type="text"
                 className="booker-name form__content col-md-4"
                 placeholder={t("reservation.company")}
                 value={guestInformation.guest1.company}
                 onChange={handleChangeCompanyName}
               />
               {searchCompany && guestInformation.guest1.company ?
              //  <div className="row">
              //  <div className="col-md-2 name__title"></div>
               <ul
               style={{border:"1px solid #000", height:"200px", overflowY:"scroll", textTransform:"uppercase"}}
               className="form__content col-md-4">
                {searchCompany.map((item)=> (
                  <li onClick={() => handleChooseCompany(`${item.name}`)} style={{borderBottom:"1px solid #000", padding:'10px', cursor: "pointer", display:"inline-block"}} key={item.company_id} value={item.name}>{item.name}</li>
                ))}
               </ul>
              //  </div>
               : <span className=" col-md-4 required__note">{t("reservation.company-note")}</span>
             }
               {guestInformation.guest1.company  ?
               <>
               <div className="row">
               <div className="col-md-2 name__title">Choice of Discount: </div>
               <div className="row">
              <div className="col-md-2 name__title"></div>
                <div className="col-md-6 ml-2">
               <input
                type="radio"
                name="discount"
                className="special"
                id="discount1"
                value='Company have contract 5% OFF'
                onChange={(e) => setDiscount(e.target.value)}
              />
              <label  htmlFor="discount1">Company have contract 5% OFF</label>
                </div>
              </div>
              <div className="row">
              <div className="col-md-2 name__title"></div>
                <div className="col-md-6 ml-2">
              <input
                type="radio"
                name="discount"
                className="special"
                id="discount2"
                value="Company have contract free laundry 120.000vnd/day"
                onChange={(e) => setDiscount(e.target.value)}
              />
                <label htmlFor="discount2">Company have contract free laundry 120.000vnd/day</label>
                </div>
              </div>
              <div className="row">
              <div className="col-md-2 name__title"></div>
                <div className="col-md-6 ml-2">
              <input
                type="radio"
                name="discount"
                className="special"
                id="discount3"
                value="Company have contract 5% OFF + free laundry 120.000vnd/day"
                onChange={(e) => setDiscount(e.target.value)}
              />
                <label htmlFor="discount3">Company have contract 5% OFF + free laundry 120.000vnd/day</label>
                </div>
              </div>
              </div>
              </> : ""
            } 
            </div>}
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.vat-invoice")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="vatInvoice"
                   id="no-need"
                   className="VATInvoice"
                   value={t("reservation.n-need")}
                   onClick={(e) => setVat(e.target.value)}
                 />
                 <label htmlFor="no-need">{t("reservation.n-need")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="vatInvoice"
                   id="need"
                   className="VATInvoice"
                   value={t("reservation.need")}
                   onClick={(e) => setVat(e.target.value)}
                 />
                 <label htmlFor="need">{t("reservation.need")}</label>
               </div>
             </div>
               <span className="col-md-6 p-0 required__note">
                 {t("reservation.vat-note")}
               </span>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.pay-method")}
               </div>
               <select
                 style={{ width: "350px" }}
                 value={paymentMethod}
                 className="col-md-2 form__content"
                 id={paymentMethod}
                 onChange={(e) => {
                   setPaymentMethod(e.target.value);
                 }}
               > {statusC === 0 &&
                 payMethod.map((item) => (
                 <option key={item.name} value={item.name}>
                   {item.name}
                 </option>
               ))} 
               {statusC === 1 && 
                 payMethod2.map((item) => (
                   <option key={item.name} value={item.name}>
                     {item.name}
                   </option>
                 ))} 
               </select>
             </div>
           </div>
         </div>
       </div>
                </TabPanel>
                 {/* GUEST INFORMATION 2 */}
              {tabs.length > 1 && (
                <TabPanel>
                <div className="guest-container">
                {/* <button 
                type="button" 
                className="base__btn btn-del"
                onClick={() => deleteTab(1)}><i class="fa-sharp fa-solid fa-xmark"></i></button> */}
         <div className="row">
           <div className="guest__information">
             <div className="col-md-12 guest__name-title">
               {t("reservation.guest-info")} 2
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.name")}
                 <span className="required__note">*</span>
                 <small>{t("reservation.name-note")}</small>
               </div>
               <input
                 placeholder={t("reservation.family-name")}
                 type="text"
                 className={errors.familyName? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 onChange={(e) => {
                   setFamilyName(e.target.value);
                 }}
               />
                {errors.familyName && 
               <p className="col-md-1 error-message">{errors.familyName}</p>}
               <input
                 placeholder={t("reservation.given-name")}
                 type="text"
                 name="gName"
                 className={errors.givenName? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 onChange={(e) => setGivenName(e.target.value)}
               />
                {errors.givenName && 
               <p className="col-md-1 error-message">{errors.givenName}</p>}
               <span className="col-md-4 required__note">
                 {t("reservation.name-required")}
               </span>
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.gender")}
                 <span className="required__note">*</span>
               </div>
               <div className={errors.gender? "col-md-2 form__group validate_failed" : "col-md-2 form__group"}>
                 <input
                   type="radio"
                   name="gender"
                   id="gMale"
                   value="Mr."
                   checked={gender === "Mr."}
                   onChange={(e) => setGender(e.target.value)}
                   
                 />
                 <label htmlFor="gMale">{t("reservation.mr")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="gender"
                   id="gFemale"
                   value="Ms."
                   checked = {gender === "Ms."}
                   onChange={(e) => setGender(e.target.value)}
                 />
                 <label htmlFor="gFemale">{t("reservation.ms")}</label>
               </div>
               {errors.gender && 
               <p className="col-md-2 error-message">{errors.gender}</p>}
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.birth-date")}
                 <span className="required__note">*</span>
               </div>
               <DayPicker />
               {errors.selectedDay && 
               <p className="col-md-1 error-message">{errors.selectedDay}</p>}
               <MonthPicker />
               {errors.selectedMonth&& 
               <p className="col-md-1 error-message">{errors.selectedMonth}</p>}
               <YearPicker />
               {errors.selectedYear && 
               <p className="col-md-1 error-message">{errors.selectedYear}</p>}
             </div>
             {showButton >= 2 && (
               <div className="row">
                 <div className="col-md-12 offset-4">
                   <button
                     className="base__btn btn__send"
                     onClick={handleClick}
                   >
                     {text}
                   </button>
                 </div>
                 {show && (
                   <div className="container">
                     <div className="row guest-information">
                       <div className="col-md-2 name__title">
                         {t("reservation.name")}
                       </div>
                       <input
                         ref={inputRef}
                         placeholder={t("reservation.family-name")}
                         type="text"
                         className="col-md-2 form__content"
                         value={secondFamilyName}
                         onClick={handleSecondFamilyNameClick}
                         onChange={handleSecondFamilyName}
                       />

                       <input
                         ref={input2Ref}
                         placeholder={t("reservation.given-name")}
                         type="text"
                         className=" col-md-2 form__content"
                         value={secondGivenName}
                         onClick={handleSecondGivenNameClick}
                         onChange={handleSecondGivenName}
                       />
                     </div>
                     <div className="row">
                       <div className="col-md-2 name__title">
                         {t("reservation.gender")}
                       </div>
                       <div className="col-md-2">
                         <input
                           type="radio"
                           name="2ndgender"
                           id="2ndgMale"
                           value="male"
                           onChange={(e) => setSecondGender(e.target.value)}
                         />
                         <label htmlFor="gMale">{t("reservation.mr")}</label>
                       </div>
                       <div className="col-md-2">
                         <input
                           type="radio"
                           name="2ndgender"
                           id="2ndgFemale"
                           value="female"
                           onChange={(e) => setSecondGender(e.target.value)}
                         />
                         <label htmlFor="2ndgFemale">
                           {t("reservation.ms")}
                         </label>
                       </div>
                     </div>
                     <div className="row">
                       <div className="col-md-2 name__title">
                         {t("reservation.birth-date")}
                       </div>
                       <SecondDayPicker />
                       <SecondMonthPicker />
                       <SecondYearPicker />
                     </div>
                   </div>
                 )}
               </div>
             )}
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.room-type")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="roomType"
                   id="smk"
                   value={t("reservation.smk")}                       
                   checked =  {roomType === `${t("reservation.smk")}`}
                   onClick={(e) => setRoomType(e.target.value)}
                 />
                 <label htmlFor="smk">{t("reservation.smk")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="roomType"
                   id="no-smk"
                   checked = {roomType === `${t("reservation.non-smk")}`}
                   value={t("reservation.non-smk")}
                   onClick={(e) => setRoomType(e.target.value)}
                 />
                 <label htmlFor="no-smk">{t("reservation.non-smk")}</label>
               </div>
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.contract")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   id="hContract"
                   className="Contract"
                   value={t("reservation.n-cont")}
                   checked={statusC == 0}
                   onClick={(e) => {
                     setContract(e.target.value);
                     handleSelectedCompany(0);
                   }}
                 />
                 <label htmlFor="hContract">{t("reservation.n-cont")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="contract"
                   id="hContract"
                   className="Contract"
                   value={t("reservation.h-cont")}
                   checked={statusC == 1}
                   onClick={(e) => {
                     setContract(e.target.value);
                     handleSelectedCompany(1);
                   }}
                 />
                 <label htmlFor="hContract">{t("reservation.h-cont")}</label>
               </div>
             </div>
             {statusC == 1 && 
              <div className="row">
              <div className="col-md-2 name__title">{t("reservation.company")}</div>
              <input
                // ref={}
                type="text"
                className="form__content col-md-4"
                placeholder={t("reservation.company")}
                value={searchCompany}
                onChange={handleChangeCompanyName}
              />
              {searchCompany && company ?
             //  <div className="row">
             //  <div className="col-md-2 name__title"></div>
              <ul
              style={{border:"1px solid #000", height:"200px", overflowY:"scroll", textTransform:"uppercase"}}
              className="form__content col-md-4">
               {searchCompany.map((item)=> (
                 <li onClick={() => handleChooseCompany(`${item.name}`)} style={{borderBottom:"1px solid #000", padding:'10px', cursor: "pointer", display:"inline-block"}} key={item.company_id} value={item.name}>{item.name}</li>
               ))}
              </ul>
             //  </div>
              : <span className=" col-md-4 required__note">{t("reservation.company-note")}</span>
            }
              {company  ?
              <>
              <div className="row">
              <div className="col-md-2 name__title">Choice of Discount: </div>
              <div className="row">
             <div className="col-md-2 name__title"></div>
               <div className="col-md-6 ml-2">
              <input
               type="radio"
               name="discount"
               className="special"
               id="discount1"
               value='Company have contract 5% OFF'
               onChange={(e) => setDiscount(e.target.value)}
             />
             <label  htmlFor="discount1">Company have contract 5% OFF</label>
               </div>
             </div>
             <div className="row">
             <div className="col-md-2 name__title"></div>
               <div className="col-md-6 ml-2">
             <input
               type="radio"
               name="discount"
               className="special"
               id="discount2"
               value="Company have contract free laundry 120.000vnd/day"
               onChange={(e) => setDiscount(e.target.value)}
             />
               <label htmlFor="discount2">Company have contract free laundry 120.000vnd/day</label>
               </div>
             </div>
             <div className="row">
             <div className="col-md-2 name__title"></div>
               <div className="col-md-6 ml-2">
             <input
               type="radio"
               name="discount"
               className="special"
               id="discount3"
               value="Company have contract 5% OFF + free laundry 120.000vnd/day"
               onChange={(e) => setDiscount(e.target.value)}
             />
               <label htmlFor="discount3">Company have contract 5% OFF + free laundry 120.000vnd/day</label>
               </div>
             </div>
             </div>
             </> : ""
           } 
            </div>}
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.vat-invoice")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="vatInvoice"
                   id="no-need"
                   className="VATInvoice"
                   value={t("reservation.n-need")}
                   onClick={(e) => setVat(e.target.value)}
                 />
                 <label htmlFor="no-need">{t("reservation.n-need")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="vatInvoice"
                   id="need"
                   className="VATInvoice"
                   value={t("reservation.need")}
                   onClick={(e) => setVat(e.target.value)}
                 />
                 <label htmlFor="need">{t("reservation.need")}</label>
               </div>
             </div>
               <span className="col-md-6 p-0 required__note">
                 {t("reservation.vat-note")}
               </span>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.pay-method")}
               </div>
               <select
                 style={{ width: "350px" }}
                 value={paymentMethod}
                 className="col-md-2 form__content"
                 id={paymentMethod}
                 onChange={(e) => {
                   setPaymentMethod(e.target.value);
                 }}
               > {statusC === 0 &&
                 payMethod.map((item) => (
                 <option key={item.name} value={item.name}>
                   {item.name}
                 </option>
               ))} 
               {statusC === 1 && 
                 payMethod2.map((item) => (
                   <option key={item.name} value={item.name}>
                     {item.name}
                   </option>
                 ))} 
               </select>
             </div>
           </div>
         </div>
       </div>
                </TabPanel>
              )
              }
               {/* GUEST INFORMATION 3 */}
              {tabs.length > 2 && (
                <TabPanel>
                <div className="guest-container">
                {/* <button 
                type="button" 
                className="base__btn btn-del"
                onClick={() => deleteTab(2)}>X</button> */}
         <div className="row">
           <div className="guest__information">
             <div className="col-md-12 guest__name-title">
               {t("reservation.guest-info")} 3
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.name")}
                 <span className="required__note">*</span>
                 <small>{t("reservation.name-note")}</small>
               </div>
               <input
                 placeholder={t("reservation.family-name")}
                 type="text"
                 className={errors.familyName? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 onChange={(e) => {
                   setFamilyName(e.target.value);
                 }}
               />
                {errors.familyName && 
               <p className="col-md-1 error-message">{errors.familyName}</p>}
               <input
                 placeholder={t("reservation.given-name")}
                 type="text"
                 name="gName"
                 className={errors.givenName? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 onChange={(e) => setGivenName(e.target.value)}
               />
                {errors.givenName && 
               <p className="col-md-1 error-message">{errors.givenName}</p>}
               <span className="col-md-4 required__note">
                 {t("reservation.name-required")}
               </span>
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.gender")}
                 <span className="required__note">*</span>
               </div>
               <div className={errors.gender? "col-md-2 form__group validate_failed" : "col-md-2 form__group"}>
                 <input
                   type="radio"
                   name="gender"
                   id="gMale"
                   value="Mr."
                   checked={gender === "Mr."}
                   onChange={(e) => setGender(e.target.value)}
                   
                 />
                 <label htmlFor="gMale">{t("reservation.mr")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="gender"
                   id="gFemale"
                   value="Ms."
                   checked = {gender === "Ms."}
                   onChange={(e) => setGender(e.target.value)}
                 />
                 <label htmlFor="gFemale">{t("reservation.ms")}</label>
               </div>
               {errors.gender && 
               <p className="col-md-2 error-message">{errors.gender}</p>}
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.birth-date")}
                 <span className="required__note">*</span>
               </div>
               <DayPicker />
               {errors.selectedDay && 
               <p className="col-md-1 error-message">{errors.selectedDay}</p>}
               <MonthPicker />
               {errors.selectedMonth&& 
               <p className="col-md-1 error-message">{errors.selectedMonth}</p>}
               <YearPicker />
               {errors.selectedYear && 
               <p className="col-md-1 error-message">{errors.selectedYear}</p>}
             </div>
             {showButton >= 2 && (
               <div className="row">
                 <div className="col-md-12 offset-4">
                   <button
                     className="base__btn btn__send"
                     onClick={handleClick}
                   >
                     {text}
                   </button>
                 </div>
                 {show && (
                   <div className="container">
                     <div className="row guest-information">
                       <div className="col-md-2 name__title">
                         {t("reservation.name")}
                       </div>
                       <input
                         ref={inputRef}
                         placeholder={t("reservation.family-name")}
                         type="text"
                         className="col-md-2 form__content"
                         value={secondFamilyName}
                         onClick={handleSecondFamilyNameClick}
                         onChange={handleSecondFamilyName}
                       />

                       <input
                         ref={input2Ref}
                         placeholder={t("reservation.given-name")}
                         type="text"
                         className=" col-md-2 form__content"
                         value={secondGivenName}
                         onClick={handleSecondGivenNameClick}
                         onChange={handleSecondGivenName}
                       />
                     </div>
                     <div className="row">
                       <div className="col-md-2 name__title">
                         {t("reservation.gender")}
                       </div>
                       <div className="col-md-2">
                         <input
                           type="radio"
                           name="2ndgender"
                           id="2ndgMale"
                           value="male"
                           onChange={(e) => setSecondGender(e.target.value)}
                         />
                         <label htmlFor="gMale">{t("reservation.mr")}</label>
                       </div>
                       <div className="col-md-2">
                         <input
                           type="radio"
                           name="2ndgender"
                           id="2ndgFemale"
                           value="female"
                           onChange={(e) => setSecondGender(e.target.value)}
                         />
                         <label htmlFor="2ndgFemale">
                           {t("reservation.ms")}
                         </label>
                       </div>
                     </div>
                     <div className="row">
                       <div className="col-md-2 name__title">
                         {t("reservation.birth-date")}
                       </div>
                       <SecondDayPicker />
                       <SecondMonthPicker />
                       <SecondYearPicker />
                     </div>
                   </div>
                 )}
               </div>
             )}
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.room-type")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="roomType"
                   id="smk"
                   value={t("reservation.smk")}                       
                   checked =  {roomType === `${t("reservation.smk")}`}
                   onClick={(e) => setRoomType(e.target.value)}
                 />
                 <label htmlFor="smk">{t("reservation.smk")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="roomType"
                   id="no-smk"
                   checked = {roomType === `${t("reservation.non-smk")}`}
                   value={t("reservation.non-smk")}
                   onClick={(e) => setRoomType(e.target.value)}
                 />
                 <label htmlFor="no-smk">{t("reservation.non-smk")}</label>
               </div>
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.contract")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   id="hContract"
                   className="Contract"
                   value={t("reservation.n-cont")}
                   checked={statusC == 0}
                   onClick={(e) => {
                     setContract(e.target.value);
                     handleSelectedCompany(0);
                   }}
                 />
                 <label htmlFor="hContract">{t("reservation.n-cont")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="contract"
                   id="hContract"
                   className="Contract"
                   value={t("reservation.h-cont")}
                   checked={statusC == 1}
                   onClick={(e) => {
                     setContract(e.target.value);
                     handleSelectedCompany(1);
                   }}
                 />
                 <label htmlFor="hContract">{t("reservation.h-cont")}</label>
               </div>
             </div>
             {statusC == 1 && 
              <div className="row">
              <div className="col-md-2 name__title">{t("reservation.company")}</div>
              <input
                // ref={}
                type="text"
                className="form__content col-md-4"
                placeholder={t("reservation.company")}
                value={searchCompany}
                onChange={handleChangeCompanyName}
              />
              {searchCompany && company ?
             //  <div className="row">
             //  <div className="col-md-2 name__title"></div>
              <ul
              style={{border:"1px solid #000", height:"200px", overflowY:"scroll", textTransform:"uppercase"}}
              className="form__content col-md-4">
               {searchCompany.map((item)=> (
                 <li onClick={() => handleChooseCompany(`${item.name}`)} style={{borderBottom:"1px solid #000", padding:'10px', cursor: "pointer", display:"inline-block"}} key={item.company_id} value={item.name}>{item.name}</li>
               ))}
              </ul>
             //  </div>
              : <span className=" col-md-4 required__note">{t("reservation.company-note")}</span>
            }
              {company  ?
              <>
              <div className="row">
              <div className="col-md-2 name__title">Choice of Discount: </div>
              <div className="row">
             <div className="col-md-2 name__title"></div>
               <div className="col-md-6 ml-2">
              <input
               type="radio"
               name="discount"
               className="special"
               id="discount1"
               value='Company have contract 5% OFF'
               onChange={(e) => setDiscount(e.target.value)}
             />
             <label  htmlFor="discount1">Company have contract 5% OFF</label>
               </div>
             </div>
             <div className="row">
             <div className="col-md-2 name__title"></div>
               <div className="col-md-6 ml-2">
             <input
               type="radio"
               name="discount"
               className="special"
               id="discount2"
               value="Company have contract free laundry 120.000vnd/day"
               onChange={(e) => setDiscount(e.target.value)}
             />
               <label htmlFor="discount2">Company have contract free laundry 120.000vnd/day</label>
               </div>
             </div>
             <div className="row">
             <div className="col-md-2 name__title"></div>
               <div className="col-md-6 ml-2">
             <input
               type="radio"
               name="discount"
               className="special"
               id="discount3"
               value="Company have contract 5% OFF + free laundry 120.000vnd/day"
               onChange={(e) => setDiscount(e.target.value)}
             />
               <label htmlFor="discount3">Company have contract 5% OFF + free laundry 120.000vnd/day</label>
               </div>
             </div>
             </div>
             </> : ""
           } 
            </div>}
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.vat-invoice")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="vatInvoice"
                   id="no-need"
                   className="VATInvoice"
                   value={t("reservation.n-need")}
                   onClick={(e) => setVat(e.target.value)}
                 />
                 <label htmlFor="no-need">{t("reservation.n-need")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="vatInvoice"
                   id="need"
                   className="VATInvoice"
                   value={t("reservation.need")}
                   onClick={(e) => setVat(e.target.value)}
                 />
                 <label htmlFor="need">{t("reservation.need")}</label>
               </div>
             </div>
               <span className="col-md-6 p-0 required__note">
                 {t("reservation.vat-note")}
               </span>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.pay-method")}
               </div>
               <select
                 style={{ width: "350px" }}
                 value={paymentMethod}
                 className="col-md-2 form__content"
                 id={paymentMethod}
                 onChange={(e) => {
                   setPaymentMethod(e.target.value);
                 }}
               > {statusC === 0 &&
                 payMethod.map((item) => (
                 <option key={item.name} value={item.name}>
                   {item.name}
                 </option>
               ))} 
               {statusC === 1 && 
                 payMethod2.map((item) => (
                   <option key={item.name} value={item.name}>
                     {item.name}
                   </option>
                 ))} 
               </select>
             </div>
           </div>
         </div>
       </div>
                </TabPanel>
                  
              )
              }
               {/* GUEST INFORMATION 4 */}
              {tabs.length > 3 && (
                <TabPanel>
                <div className="guest-container">
                {/* <button 
                type="button" 
                className="base__btn btn-del"
                onClick={() => deleteTab(3)}>X</button> */}
         <div className="row">
           <div className="guest__information">
             <div className="col-md-12 guest__name-title">
               {t("reservation.guest-info")} 4
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.name")}
                 <span className="required__note">*</span>
                 <small>{t("reservation.name-note")}</small>
               </div>
               <input
                 placeholder={t("reservation.family-name")}
                 type="text"
                 className={errors.familyName? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 onChange={(e) => {
                   setFamilyName(e.target.value);
                 }}
               />
                {errors.familyName && 
               <p className="col-md-1 error-message">{errors.familyName}</p>}
               <input
                 placeholder={t("reservation.given-name")}
                 type="text"
                 name="gName"
                 className={errors.givenName? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 onChange={(e) => setGivenName(e.target.value)}
               />
                {errors.givenName && 
               <p className="col-md-1 error-message">{errors.givenName}</p>}
               <span className="col-md-4 required__note">
                 {t("reservation.name-required")}
               </span>
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.gender")}
                 <span className="required__note">*</span>
               </div>
               <div className={errors.gender? "col-md-2 form__group validate_failed" : "col-md-2 form__group"}>
                 <input
                   type="radio"
                   name="gender"
                   id="gMale"
                   value="Mr."
                   checked={gender === "Mr."}
                   onChange={(e) => setGender(e.target.value)}
                   
                 />
                 <label htmlFor="gMale">{t("reservation.mr")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="gender"
                   id="gFemale"
                   value="Ms."
                   checked = {gender === "Ms."}
                   onChange={(e) => setGender(e.target.value)}
                 />
                 <label htmlFor="gFemale">{t("reservation.ms")}</label>
               </div>
               {errors.gender && 
               <p className="col-md-2 error-message">{errors.gender}</p>}
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.birth-date")}
                 <span className="required__note">*</span>
               </div>
               <DayPicker />
               {errors.selectedDay && 
               <p className="col-md-1 error-message">{errors.selectedDay}</p>}
               <MonthPicker />
               {errors.selectedMonth&& 
               <p className="col-md-1 error-message">{errors.selectedMonth}</p>}
               <YearPicker />
               {errors.selectedYear && 
               <p className="col-md-1 error-message">{errors.selectedYear}</p>}
             </div>
             {showButton >= 2 && (
               <div className="row">
                 <div className="col-md-12 offset-4">
                   <button
                     className="base__btn btn__send"
                     onClick={handleClick}
                   >
                     {text}
                   </button>
                 </div>
                 {show && (
                   <div className="container">
                     <div className="row guest-information">
                       <div className="col-md-2 name__title">
                         {t("reservation.name")}
                       </div>
                       <input
                         ref={inputRef}
                         placeholder={t("reservation.family-name")}
                         type="text"
                         className="col-md-2 form__content"
                         value={secondFamilyName}
                         onClick={handleSecondFamilyNameClick}
                         onChange={handleSecondFamilyName}
                       />

                       <input
                         ref={input2Ref}
                         placeholder={t("reservation.given-name")}
                         type="text"
                         className=" col-md-2 form__content"
                         value={secondGivenName}
                         onClick={handleSecondGivenNameClick}
                         onChange={handleSecondGivenName}
                       />
                     </div>
                     <div className="row">
                       <div className="col-md-2 name__title">
                         {t("reservation.gender")}
                       </div>
                       <div className="col-md-2">
                         <input
                           type="radio"
                           name="2ndgender"
                           id="2ndgMale"
                           value="male"
                           onChange={(e) => setSecondGender(e.target.value)}
                         />
                         <label htmlFor="gMale">{t("reservation.mr")}</label>
                       </div>
                       <div className="col-md-2">
                         <input
                           type="radio"
                           name="2ndgender"
                           id="2ndgFemale"
                           value="female"
                           onChange={(e) => setSecondGender(e.target.value)}
                         />
                         <label htmlFor="2ndgFemale">
                           {t("reservation.ms")}
                         </label>
                       </div>
                     </div>
                     <div className="row">
                       <div className="col-md-2 name__title">
                         {t("reservation.birth-date")}
                       </div>
                       <SecondDayPicker />
                       <SecondMonthPicker />
                       <SecondYearPicker />
                     </div>
                   </div>
                 )}
               </div>
             )}      
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.room-type")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="roomType"
                   id="smk"
                   value={t("reservation.smk")}                       
                   checked =  {roomType === `${t("reservation.smk")}`}
                   onClick={(e) => setRoomType(e.target.value)}
                 />
                 <label htmlFor="smk">{t("reservation.smk")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="roomType"
                   id="no-smk"
                   checked = {roomType === `${t("reservation.non-smk")}`}
                   value={t("reservation.non-smk")}
                   onClick={(e) => setRoomType(e.target.value)}
                 />
                 <label htmlFor="no-smk">{t("reservation.non-smk")}</label>
               </div>
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.contract")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   id="hContract"
                   className="Contract"
                   value={t("reservation.n-cont")}
                   checked={statusC == 0}
                   onClick={(e) => {
                     setContract(e.target.value);
                     handleSelectedCompany(0);
                   }}
                 />
                 <label htmlFor="hContract">{t("reservation.n-cont")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="contract"
                   id="hContract"
                   className="Contract"
                   value={t("reservation.h-cont")}
                   checked={statusC == 1}
                   onClick={(e) => {
                     setContract(e.target.value);
                     handleSelectedCompany(1);
                   }}
                 />
                 <label htmlFor="hContract">{t("reservation.h-cont")}</label>
               </div>
             </div>
             {statusC == 1 && 
              <div className="row">
              <div className="col-md-2 name__title">{t("reservation.company")}</div>
              <input
                // ref={}
                type="text"
                className="form__content col-md-4"
                placeholder={t("reservation.company")}
                value={searchCompany}
                onChange={handleChangeCompanyName}
              />
              {searchCompany && company ?
             //  <div className="row">
             //  <div className="col-md-2 name__title"></div>
              <ul
              style={{border:"1px solid #000", height:"200px", overflowY:"scroll", textTransform:"uppercase"}}
              className="form__content col-md-4">
               {searchCompany.map((item)=> (
                 <li onClick={() => handleChooseCompany(`${item.name}`)} style={{borderBottom:"1px solid #000", padding:'10px', cursor: "pointer", display:"inline-block"}} key={item.company_id} value={item.name}>{item.name}</li>
               ))}
              </ul>
             //  </div>
              : <span className=" col-md-4 required__note">{t("reservation.company-note")}</span>
            }
              {company  ?
              <>
              <div className="row">
              <div className="col-md-2 name__title">Choice of Discount: </div>
              <div className="row">
             <div className="col-md-2 name__title"></div>
               <div className="col-md-6 ml-2">
              <input
               type="radio"
               name="discount"
               className="special"
               id="discount1"
               value='Company have contract 5% OFF'
               onChange={(e) => setDiscount(e.target.value)}
             />
             <label  htmlFor="discount1">Company have contract 5% OFF</label>
               </div>
             </div>
             <div className="row">
             <div className="col-md-2 name__title"></div>
               <div className="col-md-6 ml-2">
             <input
               type="radio"
               name="discount"
               className="special"
               id="discount2"
               value="Company have contract free laundry 120.000vnd/day"
               onChange={(e) => setDiscount(e.target.value)}
             />
               <label htmlFor="discount2">Company have contract free laundry 120.000vnd/day</label>
               </div>
             </div>
             <div className="row">
             <div className="col-md-2 name__title"></div>
               <div className="col-md-6 ml-2">
             <input
               type="radio"
               name="discount"
               className="special"
               id="discount3"
               value="Company have contract 5% OFF + free laundry 120.000vnd/day"
               onChange={(e) => setDiscount(e.target.value)}
             />
               <label htmlFor="discount3">Company have contract 5% OFF + free laundry 120.000vnd/day</label>
               </div>
             </div>
             </div>
             </> : ""
           } 
            </div>}
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.vat-invoice")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="vatInvoice"
                   id="no-need"
                   className="VATInvoice"
                   value={t("reservation.n-need")}
                   onClick={(e) => setVat(e.target.value)}
                 />
                 <label htmlFor="no-need">{t("reservation.n-need")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="vatInvoice"
                   id="need"
                   className="VATInvoice"
                   value={t("reservation.need")}
                   onClick={(e) => setVat(e.target.value)}
                 />
                 <label htmlFor="need">{t("reservation.need")}</label>
               </div>
             </div>
               <span className="col-md-6 p-0 required__note">
                 {t("reservation.vat-note")}
               </span>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.pay-method")}
               </div>
               <select
                 style={{ width: "350px" }}
                 value={paymentMethod}
                 className="col-md-2 form__content"
                 id={paymentMethod}
                 onChange={(e) => {
                   setPaymentMethod(e.target.value);
                 }}
               > {statusC === 0 &&
                 payMethod.map((item) => (
                 <option key={item.name} value={item.name}>
                   {item.name}
                 </option>
               ))} 
               {statusC === 1 && 
                 payMethod2.map((item) => (
                   <option key={item.name} value={item.name}>
                     {item.name}
                   </option>
                 ))} 
               </select>
             </div>
           </div>
         </div>
       </div>
                </TabPanel>
              )
              }
               {/* GUEST INFORMATION 5 */}
              {tabs.length > 4 &&  (
                <TabPanel>
                <div className="guest-container">
                {/* <button 
                type="button" 
                className="base__btn btn-del"
                onClick={() => deleteTab(4)}>X</button> */}
         <div className="row">
           <div className="guest__information">
             <div className="col-md-12 guest__name-title">
               {t("reservation.guest-info")} 5
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.name")}
                 <span className="required__note">*</span>
                 <small>{t("reservation.name-note")}</small>
               </div>
               <input
                 placeholder={t("reservation.family-name")}
                 type="text"
                 className={errors.familyName? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 onChange={(e) => {
                   setFamilyName(e.target.value);
                 }}
               />
                {errors.familyName && 
               <p className="col-md-1 error-message">{errors.familyName}</p>}
               <input
                 placeholder={t("reservation.given-name")}
                 type="text"
                 name="gName"
                 className={errors.givenName? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 onChange={(e) => setGivenName(e.target.value)}
               />
                {errors.givenName && 
               <p className="col-md-1 error-message">{errors.givenName}</p>}
               <span className="col-md-4 required__note">
                 {t("reservation.name-required")}
               </span>
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.gender")}
                 <span className="required__note">*</span>
               </div>
               <div className={errors.gender? "col-md-2 form__group validate_failed" : "col-md-2 form__group"}>
                 <input
                   type="radio"
                   name="gender"
                   id="gMale"
                   value="Mr."
                   checked={gender === "Mr."}
                   onChange={(e) => setGender(e.target.value)}
                   
                 />
                 <label htmlFor="gMale">{t("reservation.mr")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="gender"
                   id="gFemale"
                   value="Ms."
                   checked = {gender === "Ms."}
                   onChange={(e) => setGender(e.target.value)}
                 />
                 <label htmlFor="gFemale">{t("reservation.ms")}</label>
               </div>
               {errors.gender && 
               <p className="col-md-2 error-message">{errors.gender}</p>}
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.birth-date")}
                 <span className="required__note">*</span>
               </div>
               <DayPicker />
               {errors.selectedDay && 
               <p className="col-md-1 error-message">{errors.selectedDay}</p>}
               <MonthPicker />
               {errors.selectedMonth&& 
               <p className="col-md-1 error-message">{errors.selectedMonth}</p>}
               <YearPicker />
               {errors.selectedYear && 
               <p className="col-md-1 error-message">{errors.selectedYear}</p>}
             </div>
             {showButton >= 2 && (
               <div className="row">
                 <div className="col-md-12 offset-4">
                   <button
                     className="base__btn btn__send"
                     onClick={handleClick}
                   >
                     {text}
                   </button>
                 </div>
                 {show && (
                   <div className="container">
                     <div className="row guest-information">
                       <div className="col-md-2 name__title">
                         {t("reservation.name")}
                       </div>
                       <input
                         ref={inputRef}
                         placeholder={t("reservation.family-name")}
                         type="text"
                         className="col-md-2 form__content"
                         value={secondFamilyName}
                         onClick={handleSecondFamilyNameClick}
                         onChange={handleSecondFamilyName}
                       />

                       <input
                         ref={input2Ref}
                         placeholder={t("reservation.given-name")}
                         type="text"
                         className=" col-md-2 form__content"
                         value={secondGivenName}
                         onClick={handleSecondGivenNameClick}
                         onChange={handleSecondGivenName}
                       />
                     </div>
                     <div className="row">
                       <div className="col-md-2 name__title">
                         {t("reservation.gender")}
                       </div>
                       <div className="col-md-2">
                         <input
                           type="radio"
                           name="2ndgender"
                           id="2ndgMale"
                           value="male"
                           onChange={(e) => setSecondGender(e.target.value)}
                         />
                         <label htmlFor="gMale">{t("reservation.mr")}</label>
                       </div>
                       <div className="col-md-2">
                         <input
                           type="radio"
                           name="2ndgender"
                           id="2ndgFemale"
                           value="female"
                           onChange={(e) => setSecondGender(e.target.value)}
                         />
                         <label htmlFor="2ndgFemale">
                           {t("reservation.ms")}
                         </label>
                       </div>
                     </div>
                     <div className="row">
                       <div className="col-md-2 name__title">
                         {t("reservation.birth-date")}
                       </div>
                       <SecondDayPicker />
                       <SecondMonthPicker />
                       <SecondYearPicker />
                     </div>
                   </div>
                 )}
               </div>
             )} 
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.room-type")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="roomType"
                   id="smk"
                   value={t("reservation.smk")}                       
                   checked =  {roomType === `${t("reservation.smk")}`}
                   onClick={(e) => setRoomType(e.target.value)}
                 />
                 <label htmlFor="smk">{t("reservation.smk")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="roomType"
                   id="no-smk"
                   checked = {roomType === `${t("reservation.non-smk")}`}
                   value={t("reservation.non-smk")}
                   onClick={(e) => setRoomType(e.target.value)}
                 />
                 <label htmlFor="no-smk">{t("reservation.non-smk")}</label>
               </div>
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.contract")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   id="hContract"
                   className="Contract"
                   value={t("reservation.n-cont")}
                   checked={statusC == 0}
                   onClick={(e) => {
                     setContract(e.target.value);
                     handleSelectedCompany(0);
                   }}
                 />
                 <label htmlFor="hContract">{t("reservation.n-cont")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="contract"
                   id="hContract"
                   className="Contract"
                   value={t("reservation.h-cont")}
                   checked={statusC == 1}
                   onClick={(e) => {
                     setContract(e.target.value);
                     handleSelectedCompany(1);
                   }}
                 />
                 <label htmlFor="hContract">{t("reservation.h-cont")}</label>
               </div>
             </div>
             {statusC == 1 && 
              <div className="row">
              <div className="col-md-2 name__title">{t("reservation.company")}</div>
              <input
                // ref={}
                type="text"
                className="form__content col-md-4"
                placeholder={t("reservation.company")}
                value={searchCompany}
                onChange={handleChangeCompanyName}
              />
              {searchCompany && company ?
             //  <div className="row">
             //  <div className="col-md-2 name__title"></div>
              <ul
              style={{border:"1px solid #000", height:"200px", overflowY:"scroll", textTransform:"uppercase"}}
              className="form__content col-md-4">
               {searchCompany.map((item)=> (
                 <li onClick={() => handleChooseCompany(`${item.name}`)} style={{borderBottom:"1px solid #000", padding:'10px', cursor: "pointer", display:"inline-block"}} key={item.company_id} value={item.name}>{item.name}</li>
               ))}
              </ul>
             //  </div>
              : <span className=" col-md-4 required__note">{t("reservation.company-note")}</span>
            }
              {company  ?
              <>
              <div className="row">
              <div className="col-md-2 name__title">Choice of Discount: </div>
              <div className="row">
             <div className="col-md-2 name__title"></div>
               <div className="col-md-6 ml-2">
              <input
               type="radio"
               name="discount"
               className="special"
               id="discount1"
               value='Company have contract 5% OFF'
               onChange={(e) => setDiscount(e.target.value)}
             />
             <label  htmlFor="discount1">Company have contract 5% OFF</label>
               </div>
             </div>
             <div className="row">
             <div className="col-md-2 name__title"></div>
               <div className="col-md-6 ml-2">
             <input
               type="radio"
               name="discount"
               className="special"
               id="discount2"
               value="Company have contract free laundry 120.000vnd/day"
               onChange={(e) => setDiscount(e.target.value)}
             />
               <label htmlFor="discount2">Company have contract free laundry 120.000vnd/day</label>
               </div>
             </div>
             <div className="row">
             <div className="col-md-2 name__title"></div>
               <div className="col-md-6 ml-2">
             <input
               type="radio"
               name="discount"
               className="special"
               id="discount3"
               value="Company have contract 5% OFF + free laundry 120.000vnd/day"
               onChange={(e) => setDiscount(e.target.value)}
             />
               <label htmlFor="discount3">Company have contract 5% OFF + free laundry 120.000vnd/day</label>
               </div>
             </div>
             </div>
             </> : ""
           } 
            </div>}
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.vat-invoice")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="vatInvoice"
                   id="no-need"
                   className="VATInvoice"
                   value={t("reservation.n-need")}
                   onClick={(e) => setVat(e.target.value)}
                 />
                 <label htmlFor="no-need">{t("reservation.n-need")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="vatInvoice"
                   id="need"
                   className="VATInvoice"
                   value={t("reservation.need")}
                   onClick={(e) => setVat(e.target.value)}
                 />
                 <label htmlFor="need">{t("reservation.need")}</label>
               </div>
             </div>
               <span className="col-md-6 p-0 required__note">
                 {t("reservation.vat-note")}
               </span>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.pay-method")}
               </div>
               <select
                 style={{ width: "350px" }}
                 value={paymentMethod}
                 className="col-md-2 form__content"
                 id={paymentMethod}
                 onChange={(e) => {
                   setPaymentMethod(e.target.value);
                 }}
               > {statusC === 0 &&
                 payMethod.map((item) => (
                 <option key={item.name} value={item.name}>
                   {item.name}
                 </option>
               ))} 
               {statusC === 1 && 
                 payMethod2.map((item) => (
                   <option key={item.name} value={item.name}>
                     {item.name}
                   </option>
                 ))} 
               </select>
             </div>
           </div>
         </div>
       </div>
                </TabPanel>
              )
              }
            </Tabs>
          </TabPanel>
        </Tabs>

        {/* <div className="guest-container">
          <div className="row">
            <div className="guest__information">
              <div className="col-md-12 guest__name-title">
                {t("reservation.guest-info")}
              </div>
              <div className="row">
                <div className="col-md-2 name__title">
                  {t("reservation.name")}
                  <span className="required__note">*</span>
                  <small>{t("reservation.name-note")}</small>
                </div>
                <input
                  placeholder={t("reservation.family-name")}
                  type="text"
                  className={errors.familyName? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                  onChange={(e) => {
                    setFamilyName([...e.target.value],'');
                  }}
                />
                 {errors.familyName && 
                <p className="col-md-1 error-message">{errors.familyName}</p>}
                <input
                  placeholder={t("reservation.given-name")}
                  type="text"
                  name="gName"
                  className={errors.givenName? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                  onChange={(e) => setGivenName(e.target.value)}
                />
                 {errors.givenName && 
                <p className="col-md-1 error-message">{errors.givenName}</p>}
                <span className="col-md-4 required__note">
                  {t("reservation.name-required")}
                </span>
              </div>
              <div className="row">
                <div className="col-md-2 name__title">
                  {t("reservation.gender")}
                  <span className="required__note">*</span>
                </div>
                <div className={errors.gender? "col-md-2 form__group validate_failed" : "col-md-2 form__group"}>
                  <input
                    type="radio"
                    name="gender"
                    id="gMale"
                    value="Mr."
                    checked={gender === "Mr."}
                    onChange={(e) => setGender(e.target.value)}
                    
                  />
                  <label htmlFor="gMale">{t("reservation.mr")}</label>
                </div>
                <div className="col-md-2">
                  <input
                    type="radio"
                    name="gender"
                    id="gFemale"
                    value="Ms."
                    checked = {gender === "Ms."}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="gFemale">{t("reservation.ms")}</label>
                </div>
                {errors.gender && 
                <p className="col-md-2 error-message">{errors.gender}</p>}
              </div>
              <div className="row">
                <div className="col-md-2 name__title">
                  {t("reservation.birth-date")}
                  <span className="required__note">*</span>
                </div>
                <DayPicker />
                {errors.selectedDay && 
                <p className="col-md-1 error-message">{errors.selectedDay}</p>}
                <MonthPicker />
                {errors.selectedMonth&& 
                <p className="col-md-1 error-message">{errors.selectedMonth}</p>}
                <YearPicker />
                {errors.selectedYear && 
                <p className="col-md-1 error-message">{errors.selectedYear}</p>}
              </div>
              {showButton >= 2 && (
                <div className="row">
                  <div className="col-md-12 offset-4">
                    <button
                      className="base__btn btn__send"
                      onClick={handleClick}
                    >
                      {text}
                    </button>
                  </div>
                  {show && (
                    <div className="container">
                      <div className="row guest-information">
                        <div className="col-md-2 name__title">
                          {t("reservation.name")}
                        </div>
                        <input
                          ref={inputRef}
                          placeholder={t("reservation.family-name")}
                          type="text"
                          className="col-md-2 form__content"
                          value={secondFamilyName}
                          onClick={handleSecondFamilyNameClick}
                          onChange={handleSecondFamilyName}
                        />

                        <input
                          ref={input2Ref}
                          placeholder={t("reservation.given-name")}
                          type="text"
                          className=" col-md-2 form__content"
                          value={secondGivenName}
                          onClick={handleSecondGivenNameClick}
                          onChange={handleSecondGivenName}
                        />
                      </div>
                      <div className="row">
                        <div className="col-md-2 name__title">
                          {t("reservation.gender")}
                        </div>
                        <div className="col-md-2">
                          <input
                            type="radio"
                            name="2ndgender"
                            id="2ndgMale"
                            value="male"
                            onChange={(e) => setSecondGender(e.target.value)}
                          />
                          <label htmlFor="gMale">{t("reservation.mr")}</label>
                        </div>
                        <div className="col-md-2">
                          <input
                            type="radio"
                            name="2ndgender"
                            id="2ndgFemale"
                            value="female"
                            onChange={(e) => setSecondGender(e.target.value)}
                          />
                          <label htmlFor="2ndgFemale">
                            {t("reservation.ms")}
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2 name__title">
                          {t("reservation.birth-date")}
                        </div>
                        <SecondDayPicker />
                        <SecondMonthPicker />
                        <SecondYearPicker />
                      </div>
                    </div>
                  )}
                </div>
              )}
              <div className="row">
                <div className="col-md-2 name__title">
                  {t("reservation.booker")}
                </div>
                <div className="col-md-6">
                  <input
                    type="radio"
                    name="Booker"
                    id="booker"
                    value={`${t('reservation.same-person')}`}
                    checked={status === 0}
                    onClick={(e) => {
                      handleSelected(0);
                     
                    }}
                    onChange={(e) => setBooker(e.target.value)}
                  />
                  <label htmlFor="booker">
                    {t("reservation.same-person")}
                  </label>
                  <br />
                  <input
                    type="radio"
                    name="Booker"
                    id="booker"
                    value={`${t('reservation.diff-person')}`}
                    checked={status === 1}
                    onClick={(e) => {
                      handleSelected(1);
                      
                    }}
                    onChange={(e) => setBooker(e.target.value)}
                  />
                  <label htmlFor="booker">
                    {t("reservation.diff-person")}
                  </label>
                </div>
              </div>
              {status === 1 && 
               <div className="row">
               <div className="col-md-2 name__title">{t("reservation.name")}</div>
               <input
                 ref={input3Ref}
                 type="text"
                 className="booker-name form__content col-md-2"
                 value={bookerName}
                 placeholder={t("reservation.name")}
                 onChange={handleChangeBookerName}
               />
             </div>}
              <div className="row">
                <div className="col-md-2 name__title">
                  {t("reservation.email")}
                  <span className="col-md-2 required__note">*</span>
                </div>
                <input
                  type="text"
                  className={errors.email? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                  placeholder={t("reservation.email")}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="col-md-6 required__note">
                  {t("reservation.email-note")}
                </span>
                {errors.email && 
                <p className="col-md-1 error-message">{errors.email}</p>}
              </div>
              <div className="row">
                <div className="col-md-2 name__title">
                  {t("reservation.phone")}
                  <span className="col-md-2 required__note">*</span>
                </div>
                <input
                  type="text"
                  className={errors.phone? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                  id=""
                  placeholder={t("reservation.phone")}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <span className="col-md-6 required__note">
                  {t("reservation.phone-note")}
                </span>
                {errors.phone && 
                <p className="col-md-1 error-message">{errors.phone}</p>}
              </div>
              <div className="row">
                <div className="col-md-2 name__title">
                  {t("reservation.room-type")}
                </div>
                <div className="col-md-2">
                  <input
                    type="radio"
                    name="roomType"
                    id="smk"
                    value={t("reservation.smk")}                       
                    checked =  {roomType === `${t("reservation.smk")}`}
                    onClick={(e) => setRoomType(e.target.value)}
                  />
                  <label htmlFor="smk">{t("reservation.smk")}</label>
                </div>
                <div className="col-md-2">
                  <input
                    type="radio"
                    name="roomType"
                    id="no-smk"
                    checked = {roomType === `${t("reservation.non-smk")}`}
                    value={t("reservation.non-smk")}
                    onClick={(e) => setRoomType(e.target.value)}
                  />
                  <label htmlFor="no-smk">{t("reservation.non-smk")}</label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 name__title">
                  {t("reservation.contract")}
                </div>
                <div className="col-md-2">
                  <input
                    type="radio"
                    id="hContract"
                    className="Contract"
                    value={t("reservation.n-cont")}
                    checked={statusC == 0}
                    onClick={(e) => {
                      setContract(e.target.value);
                      handleSelectedCompany(0);
                    }}
                  />
                  <label htmlFor="hContract">{t("reservation.n-cont")}</label>
                </div>
                <div className="col-md-2">
                  <input
                    type="radio"
                    name="contract"
                    id="hContract"
                    className="Contract"
                    value={t("reservation.h-cont")}
                    checked={statusC == 1}
                    onClick={(e) => {
                      setContract(e.target.value);
                      handleSelectedCompany(1);
                    }}
                  />
                  <label htmlFor="hContract">{t("reservation.h-cont")}</label>
                </div>
              </div>
              {statusC == 1 && 
               <div className="row">
               <div className="col-md-2 name__title">{t("reservation.company")}</div>
               <input
                 ref={input4Ref}
                 type="text"
                 className="form__content col-md-4"
                 placeholder={t("reservation.company")}
                 value={searchCompany}
                 onChange={handleChangeCompanyName}
               />
               {searchCompany && company ?
              //  <div className="row">
              //  <div className="col-md-2 name__title"></div>
               <ul
               style={{border:"1px solid #000", height:"200px", overflowY:"scroll", textTransform:"uppercase"}}
               className="form__content col-md-4">
                {searchCompany.map((item)=> (
                  <li onClick={() => handleChooseCompany(`${item.name}`)} style={{borderBottom:"1px solid #000", padding:'10px', cursor: "pointer", display:"inline-block"}} key={item.company_id} value={item.name}>{item.name}</li>
                ))}
               </ul>
              //  </div>
               : <span className=" col-md-4 required__note">{t("reservation.company-note")}</span>
             }
               {company  ?
               <>
               <div className="row">
               <div className="col-md-2 name__title">Choice of Discount: </div>
               <div className="row">
              <div className="col-md-2 name__title"></div>
                <div className="col-md-6 ml-2">
               <input
                type="radio"
                name="discount"
                className="special"
                id="discount1"
                value='Company have contract 5% OFF'
                onChange={(e) => setDiscount(e.target.value)}
              />
              <label  htmlFor="discount1">Company have contract 5% OFF</label>
                </div>
              </div>
              <div className="row">
              <div className="col-md-2 name__title"></div>
                <div className="col-md-6 ml-2">
              <input
                type="radio"
                name="discount"
                className="special"
                id="discount2"
                value="Company have contract free laundry 120.000vnd/day"
                onChange={(e) => setDiscount(e.target.value)}
              />
                <label htmlFor="discount2">Company have contract free laundry 120.000vnd/day</label>
                </div>
              </div>
              <div className="row">
              <div className="col-md-2 name__title"></div>
                <div className="col-md-6 ml-2">
              <input
                type="radio"
                name="discount"
                className="special"
                id="discount3"
                value="Company have contract 5% OFF + free laundry 120.000vnd/day"
                onChange={(e) => setDiscount(e.target.value)}
              />
                <label htmlFor="discount3">Company have contract 5% OFF + free laundry 120.000vnd/day</label>
                </div>
              </div>
              </div>
              </> : ""
            } 
             </div>}
              <div className="row">
                <div className="col-md-2 name__title">
                  {t("reservation.vat-invoice")}
                </div>
                <div className="col-md-2">
                  <input
                    type="radio"
                    name="vatInvoice"
                    id="no-need"
                    className="VATInvoice"
                    value={t("reservation.n-need")}
                    onClick={(e) => setVat(e.target.value)}
                  />
                  <label htmlFor="no-need">{t("reservation.n-need")}</label>
                </div>
                <div className="col-md-2">
                  <input
                    type="radio"
                    name="vatInvoice"
                    id="need"
                    className="VATInvoice"
                    value={t("reservation.need")}
                    onClick={(e) => setVat(e.target.value)}
                  />
                  <label htmlFor="need">{t("reservation.need")}</label>
                </div>
              </div>
                <span className="col-md-6 p-0 required__note">
                  {t("reservation.vat-note")}
                </span>
              <div className="row">
                <div className="col-md-2 name__title">
                  {t("reservation.pay-method")}
                </div>
                <select
                  style={{ width: "350px" }}
                  value={paymentMethod}
                  className="col-md-2 form__content"
                  id={paymentMethod}
                  onChange={(e) => {
                    setPaymentMethod(e.target.value);
                  }}
                > {statusC === 0 &&
                  payMethod.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))} 
                {statusC === 1 && 
                  payMethod2.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  ))} 
                </select>
              </div>
            </div>
          </div>
        </div> */}

        {/* {roomAmount >= 2 && 
         <div className="guest-container">
         <div className="row">
           <div className="guest__information">
             <div className="col-md-12 guest__name-title">
               {t("reservation.guest-info")}
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.name")}
                 <span className="required__note">*</span>
                 <small>{t("reservation.name-note")}</small>
               </div>
               <input
                 placeholder={t("reservation.family-name")}
                 type="text"
                 className={errors.familyName? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 onChange={(e) => {
                   setFamilyName(e.target.value);
                 }}
               />
                {errors.familyName && 
               <p className="col-md-1 error-message">{errors.familyName}</p>}
               <input
                 placeholder={t("reservation.given-name")}
                 type="text"
                 name="gName"
                 className={errors.givenName? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 onChange={(e) => setGivenName(e.target.value)}
               />
                {errors.givenName && 
               <p className="col-md-1 error-message">{errors.givenName}</p>}
               <span className="col-md-4 required__note">
                 {t("reservation.name-required")}
               </span>
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.gender")}
                 <span className="required__note">*</span>
               </div>
               <div className={errors.gender? "col-md-2 form__group validate_failed" : "col-md-2 form__group"}>
                 <input
                   type="radio"
                   name="gender"
                   id="gMale"
                   value="Mr."
                   checked={gender === "Mr."}
                   onChange={(e) => setGender(e.target.value)}
                   
                 />
                 <label htmlFor="gMale">{t("reservation.mr")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="gender"
                   id="gFemale"
                   value="Ms."
                   checked = {gender === "Ms."}
                   onChange={(e) => setGender(e.target.value)}
                 />
                 <label htmlFor="gFemale">{t("reservation.ms")}</label>
               </div>
               {errors.gender && 
               <p className="col-md-2 error-message">{errors.gender}</p>}
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.birth-date")}
                 <span className="required__note">*</span>
               </div>
               <DayPicker />
               {errors.selectedDay && 
               <p className="col-md-1 error-message">{errors.selectedDay}</p>}
               <MonthPicker />
               {errors.selectedMonth&& 
               <p className="col-md-1 error-message">{errors.selectedMonth}</p>}
               <YearPicker />
               {errors.selectedYear && 
               <p className="col-md-1 error-message">{errors.selectedYear}</p>}
             </div>
             {showButton >= 2 && (
               <div className="row">
                 <div className="col-md-12 offset-4">
                   <button
                    type="button"
                     className="base__btn btn__send"
                     onClick={handleClick}
                   >
                     {text}
                   </button>
                 </div>
                 {show && (
                   <div className="container">
                     <div className="row guest-information">
                       <div className="col-md-2 name__title">
                         {t("reservation.name")}
                       </div>
                       <input
                         ref={inputRef}
                         placeholder={t("reservation.family-name")}
                         type="text"
                         className="col-md-2 form__content"
                         value={secondFamilyName}
                         onClick={handleSecondFamilyNameClick}
                         onChange={handleSecondFamilyName}
                       />

                       <input
                         ref={input2Ref}
                         placeholder={t("reservation.given-name")}
                         type="text"
                         className=" col-md-2 form__content"
                         value={secondGivenName}
                         onClick={handleSecondGivenNameClick}
                         onChange={handleSecondGivenName}
                       />
                     </div>
                     <div className="row">
                       <div className="col-md-2 name__title">
                         {t("reservation.gender")}
                       </div>
                       <div className="col-md-2">
                         <input
                           type="radio"
                           name="2ndgender"
                           id="2ndgMale"
                           value="male"
                           onChange={(e) => setSecondGender(e.target.value)}
                         />
                         <label htmlFor="gMale">{t("reservation.mr")}</label>
                       </div>
                       <div className="col-md-2">
                         <input
                           type="radio"
                           name="2ndgender"
                           id="2ndgFemale"
                           value="female"
                           onChange={(e) => setSecondGender(e.target.value)}
                         />
                         <label htmlFor="2ndgFemale">
                           {t("reservation.ms")}
                         </label>
                       </div>
                     </div>
                     <div className="row">
                       <div className="col-md-2 name__title">
                         {t("reservation.birth-date")}
                       </div>
                       <SecondDayPicker />
                       <SecondMonthPicker />
                       <SecondYearPicker />
                     </div>
                   </div>
                 )}
               </div>
             )}
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.booker")}
               </div>
               <div className="col-md-6">
                 <input
                   type="radio"
                   name="Booker"
                   id="booker"
                   value={`${t('reservation.same-person')}`}
                   checked={status === 0}
                   onClick={(e) => {
                     handleSelected(0);
                    
                   }}
                   onChange={(e) => setBooker(e.target.value)}
                 />
                 <label htmlFor="booker">
                   {t("reservation.same-person")}
                 </label>
                 <br />
                 <input
                   type="radio"
                   name="Booker"
                   id="booker"
                   value={`${t('reservation.diff-person')}`}
                   checked={status === 1}
                   onClick={(e) => {
                     handleSelected(1);
                     
                   }}
                   onChange={(e) => setBooker(e.target.value)}
                 />
                 <label htmlFor="booker">
                   {t("reservation.diff-person")}
                 </label>
               </div>
             </div>
             {status === 1 && 
              <div className="row">
              <div className="col-md-2 name__title">{t("reservation.name")}</div>
              <input
                ref={input3Ref}
                type="text"
                className="booker-name form__content col-md-2"
                value={bookerName}
                placeholder={t("reservation.name")}
                onChange={handleChangeBookerName}
              />
            </div>}
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.email")}
                 <span className="col-md-2 required__note">*</span>
               </div>
               <input
                 type="text"
                 className={errors.email? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 placeholder={t("reservation.email")}
                 onChange={(e) => setEmail(e.target.value)}
               />
               <span className="col-md-6 required__note">
                 {t("reservation.email-note")}
               </span>
               {errors.email && 
               <p className="col-md-1 error-message">{errors.email}</p>}
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.phone")}
                 <span className="col-md-2 required__note">*</span>
               </div>
               <input
                 type="text"
                 className={errors.phone? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 id=""
                 placeholder={t("reservation.phone")}
                 onKeyPress={(event) => {
                   if (!/[0-9]/.test(event.key)) {
                     event.preventDefault();
                   }
                 }}
                 onChange={(e) => setPhone(e.target.value)}
               />
               <span className="col-md-6 required__note">
                 {t("reservation.phone-note")}
               </span>
               {errors.phone && 
               <p className="col-md-1 error-message">{errors.phone}</p>}
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.room-type")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="roomType"
                   id="smk"
                   value={t("reservation.smk")}                       
                   checked =  {roomType === `${t("reservation.smk")}`}
                   onClick={(e) => setRoomType(e.target.value)}
                 />
                 <label htmlFor="smk">{t("reservation.smk")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="roomType"
                   id="no-smk"
                   checked = {roomType === `${t("reservation.non-smk")}`}
                   value={t("reservation.non-smk")}
                   onClick={(e) => setRoomType(e.target.value)}
                 />
                 <label htmlFor="no-smk">{t("reservation.non-smk")}</label>
               </div>
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.contract")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   id="hContract"
                   className="Contract"
                   value={t("reservation.n-cont")}
                   checked={statusC == 0}
                   onClick={(e) => {
                     setContract(e.target.value);
                     handleSelectedCompany(0);
                   }}
                 />
                 <label htmlFor="hContract">{t("reservation.n-cont")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="contract"
                   id="hContract"
                   className="Contract"
                   value={t("reservation.h-cont")}
                   checked={statusC == 1}
                   onClick={(e) => {
                     setContract(e.target.value);
                     handleSelectedCompany(1);
                   }}
                 />
                 <label htmlFor="hContract">{t("reservation.h-cont")}</label>
               </div>
             </div>
             {statusC == 1 && 
              <div className="row">
              <div className="col-md-2 name__title">{t("reservation.company")}</div>
              <input
                ref={input4Ref}
                type="text"
                className="form__content col-md-4"
                placeholder={t("reservation.company")}
                value={searchCompany}
                onChange={handleChangeCompanyName}
              />
              {searchCompany && company ?
             //  <div className="row">
             //  <div className="col-md-2 name__title"></div>
              <ul
              style={{border:"1px solid #000", height:"200px", overflowY:"scroll", textTransform:"uppercase"}}
              className="form__content col-md-4">
               {searchCompany.map((item)=> (
                 <li onClick={() => handleChooseCompany(`${item.name}`)} style={{borderBottom:"1px solid #000", padding:'10px', cursor: "pointer", display:"inline-block"}} key={item.company_id} value={item.name}>{item.name}</li>
               ))}
              </ul>
             //  </div>
              : <span className=" col-md-4 required__note">{t("reservation.company-note")}</span>
            }
              {company  ?
              <>
              <div className="row">
              <div className="col-md-2 name__title">Choice of Discount: </div>
              <div className="row">
             <div className="col-md-2 name__title"></div>
               <div className="col-md-6 ml-2">
              <input
               type="radio"
               name="discount"
               className="special"
               id="discount1"
               value='Company have contract 5% OFF'
               onChange={(e) => setDiscount(e.target.value)}
             />
             <label  htmlFor="discount1">Company have contract 5% OFF</label>
               </div>
             </div>
             <div className="row">
             <div className="col-md-2 name__title"></div>
               <div className="col-md-6 ml-2">
             <input
               type="radio"
               name="discount"
               className="special"
               id="discount2"
               value="Company have contract free laundry 120.000vnd/day"
               onChange={(e) => setDiscount(e.target.value)}
             />
               <label htmlFor="discount2">Company have contract free laundry 120.000vnd/day</label>
               </div>
             </div>
             <div className="row">
             <div className="col-md-2 name__title"></div>
               <div className="col-md-6 ml-2">
             <input
               type="radio"
               name="discount"
               className="special"
               id="discount3"
               value="Company have contract 5% OFF + free laundry 120.000vnd/day"
               onChange={(e) => setDiscount(e.target.value)}
             />
               <label htmlFor="discount3">Company have contract 5% OFF + free laundry 120.000vnd/day</label>
               </div>
             </div>
             </div>
             </> : ""
           } 
            </div>}
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.vat-invoice")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="vatInvoice"
                   id="no-need"
                   className="VATInvoice"
                   value={t("reservation.n-need")}
                   onClick={(e) => setVat(e.target.value)}
                 />
                 <label htmlFor="no-need">{t("reservation.n-need")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="vatInvoice"
                   id="need"
                   className="VATInvoice"
                   value={t("reservation.need")}
                   onClick={(e) => setVat(e.target.value)}
                 />
                 <label htmlFor="need">{t("reservation.need")}</label>
               </div>
             </div>
               <span className="col-md-6 p-0 required__note">
                 {t("reservation.vat-note")}
               </span>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.pay-method")}
               </div>
               <select
                 style={{ width: "350px" }}
                 value={paymentMethod}
                 className="col-md-2 form__content"
                 id={paymentMethod}
                 onChange={(e) => {
                   setPaymentMethod(e.target.value);
                 }}
               > {statusC === 0 &&
                 payMethod.map((item) => (
                 <option key={item.name} value={item.name}>
                   {item.name}
                 </option>
               ))} 
               {statusC === 1 && 
                 payMethod2.map((item) => (
                   <option key={item.name} value={item.name}>
                     {item.name}
                   </option>
                 ))} 
               </select>
             </div>
           </div>
         </div>
       </div>
        } 
        {roomAmount >= 3 && 
         <div className="guest-container">
         <div className="row">
           <div className="guest__information">
             <div className="col-md-12 guest__name-title">
               {t("reservation.guest-info")}
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.name")}
                 <span className="required__note">*</span>
                 <small>{t("reservation.name-note")}</small>
               </div>
               <input
                 placeholder={t("reservation.family-name")}
                 type="text"
                 className={errors.familyName? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 onChange={(e) => {
                   setFamilyName(e.target.value);
                 }}
               />
                {errors.familyName && 
               <p className="col-md-1 error-message">{errors.familyName}</p>}
               <input
                 placeholder={t("reservation.given-name")}
                 type="text"
                 name="gName"
                 className={errors.givenName? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 onChange={(e) => setGivenName(e.target.value)}
               />
                {errors.givenName && 
               <p className="col-md-1 error-message">{errors.givenName}</p>}
               <span className="col-md-4 required__note">
                 {t("reservation.name-required")}
               </span>
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.gender")}
                 <span className="required__note">*</span>
               </div>
               <div className={errors.gender? "col-md-2 form__group validate_failed" : "col-md-2 form__group"}>
                 <input
                   type="radio"
                   name="gender"
                   id="gMale"
                   value="Mr."
                   checked={gender === "Mr."}
                   onChange={(e) => setGender(e.target.value)}
                   
                 />
                 <label htmlFor="gMale">{t("reservation.mr")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="gender"
                   id="gFemale"
                   value="Ms."
                   checked = {gender === "Ms."}
                   onChange={(e) => setGender(e.target.value)}
                 />
                 <label htmlFor="gFemale">{t("reservation.ms")}</label>
               </div>
               {errors.gender && 
               <p className="col-md-2 error-message">{errors.gender}</p>}
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.birth-date")}
                 <span className="required__note">*</span>
               </div>
               <DayPicker />
               {errors.selectedDay && 
               <p className="col-md-1 error-message">{errors.selectedDay}</p>}
               <MonthPicker />
               {errors.selectedMonth&& 
               <p className="col-md-1 error-message">{errors.selectedMonth}</p>}
               <YearPicker />
               {errors.selectedYear && 
               <p className="col-md-1 error-message">{errors.selectedYear}</p>}
             </div>
             {showButton >= 2 && (
               <div className="row">
                 <div className="col-md-12 offset-4">
                   <button
                     className="base__btn btn__send"
                     onClick={handleClick}
                   >
                     {text}
                   </button>
                 </div>
                 {show && (
                   <div className="container">
                     <div className="row guest-information">
                       <div className="col-md-2 name__title">
                         {t("reservation.name")}
                       </div>
                       <input
                         ref={inputRef}
                         placeholder={t("reservation.family-name")}
                         type="text"
                         className="col-md-2 form__content"
                         value={secondFamilyName}
                         onClick={handleSecondFamilyNameClick}
                         onChange={handleSecondFamilyName}
                       />

                       <input
                         ref={input2Ref}
                         placeholder={t("reservation.given-name")}
                         type="text"
                         className=" col-md-2 form__content"
                         value={secondGivenName}
                         onClick={handleSecondGivenNameClick}
                         onChange={handleSecondGivenName}
                       />
                     </div>
                     <div className="row">
                       <div className="col-md-2 name__title">
                         {t("reservation.gender")}
                       </div>
                       <div className="col-md-2">
                         <input
                           type="radio"
                           name="2ndgender"
                           id="2ndgMale"
                           value="male"
                           onChange={(e) => setSecondGender(e.target.value)}
                         />
                         <label htmlFor="gMale">{t("reservation.mr")}</label>
                       </div>
                       <div className="col-md-2">
                         <input
                           type="radio"
                           name="2ndgender"
                           id="2ndgFemale"
                           value="female"
                           onChange={(e) => setSecondGender(e.target.value)}
                         />
                         <label htmlFor="2ndgFemale">
                           {t("reservation.ms")}
                         </label>
                       </div>
                     </div>
                     <div className="row">
                       <div className="col-md-2 name__title">
                         {t("reservation.birth-date")}
                       </div>
                       <SecondDayPicker />
                       <SecondMonthPicker />
                       <SecondYearPicker />
                     </div>
                   </div>
                 )}
               </div>
             )}
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.booker")}
               </div>
               <div className="col-md-6">
                 <input
                   type="radio"
                   name="Booker"
                   id="booker"
                   value={`${t('reservation.same-person')}`}
                   checked={status === 0}
                   onClick={(e) => {
                     handleSelected(0);
                    
                   }}
                   onChange={(e) => setBooker(e.target.value)}
                 />
                 <label htmlFor="booker">
                   {t("reservation.same-person")}
                 </label>
                 <br />
                 <input
                   type="radio"
                   name="Booker"
                   id="booker"
                   value={`${t('reservation.diff-person')}`}
                   checked={status === 1}
                   onClick={(e) => {
                     handleSelected(1);
                     
                   }}
                   onChange={(e) => setBooker(e.target.value)}
                 />
                 <label htmlFor="booker">
                   {t("reservation.diff-person")}
                 </label>
               </div>
             </div>
             {status === 1 && 
              <div className="row">
              <div className="col-md-2 name__title">{t("reservation.name")}</div>
              <input
                ref={input3Ref}
                type="text"
                className="booker-name form__content col-md-2"
                value={bookerName}
                placeholder={t("reservation.name")}
                onChange={handleChangeBookerName}
              />
            </div>}
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.email")}
                 <span className="col-md-2 required__note">*</span>
               </div>
               <input
                 type="text"
                 className={errors.email? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 placeholder={t("reservation.email")}
                 onChange={(e) => setEmail(e.target.value)}
               />
               <span className="col-md-6 required__note">
                 {t("reservation.email-note")}
               </span>
               {errors.email && 
               <p className="col-md-1 error-message">{errors.email}</p>}
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.phone")}
                 <span className="col-md-2 required__note">*</span>
               </div>
               <input
                 type="text"
                 className={errors.phone? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 id=""
                 placeholder={t("reservation.phone")}
                 onKeyPress={(event) => {
                   if (!/[0-9]/.test(event.key)) {
                     event.preventDefault();
                   }
                 }}
                 onChange={(e) => setPhone(e.target.value)}
               />
               <span className="col-md-6 required__note">
                 {t("reservation.phone-note")}
               </span>
               {errors.phone && 
               <p className="col-md-1 error-message">{errors.phone}</p>}
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.room-type")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="roomType"
                   id="smk"
                   value={t("reservation.smk")}                       
                   checked =  {roomType === `${t("reservation.smk")}`}
                   onClick={(e) => setRoomType(e.target.value)}
                 />
                 <label htmlFor="smk">{t("reservation.smk")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="roomType"
                   id="no-smk"
                   checked = {roomType === `${t("reservation.non-smk")}`}
                   value={t("reservation.non-smk")}
                   onClick={(e) => setRoomType(e.target.value)}
                 />
                 <label htmlFor="no-smk">{t("reservation.non-smk")}</label>
               </div>
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.contract")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   id="hContract"
                   className="Contract"
                   value={t("reservation.n-cont")}
                   checked={statusC == 0}
                   onClick={(e) => {
                     setContract(e.target.value);
                     handleSelectedCompany(0);
                   }}
                 />
                 <label htmlFor="hContract">{t("reservation.n-cont")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="contract"
                   id="hContract"
                   className="Contract"
                   value={t("reservation.h-cont")}
                   checked={statusC == 1}
                   onClick={(e) => {
                     setContract(e.target.value);
                     handleSelectedCompany(1);
                   }}
                 />
                 <label htmlFor="hContract">{t("reservation.h-cont")}</label>
               </div>
             </div>
             {statusC == 1 && 
              <div className="row">
              <div className="col-md-2 name__title">{t("reservation.company")}</div>
              <input
                ref={input4Ref}
                type="text"
                className="form__content col-md-4"
                placeholder={t("reservation.company")}
                value={searchCompany}
                onChange={handleChangeCompanyName}
              />
              {searchCompany && company ?
             //  <div className="row">
             //  <div className="col-md-2 name__title"></div>
              <ul
              style={{border:"1px solid #000", height:"200px", overflowY:"scroll", textTransform:"uppercase"}}
              className="form__content col-md-4">
               {searchCompany.map((item)=> (
                 <li onClick={() => handleChooseCompany(`${item.name}`)} style={{borderBottom:"1px solid #000", padding:'10px', cursor: "pointer", display:"inline-block"}} key={item.company_id} value={item.name}>{item.name}</li>
               ))}
              </ul>
             //  </div>
              : <span className=" col-md-4 required__note">{t("reservation.company-note")}</span>
            }
              {company  ?
              <>
              <div className="row">
              <div className="col-md-2 name__title">Choice of Discount: </div>
              <div className="row">
             <div className="col-md-2 name__title"></div>
               <div className="col-md-6 ml-2">
              <input
               type="radio"
               name="discount"
               className="special"
               id="discount1"
               value='Company have contract 5% OFF'
               onChange={(e) => setDiscount(e.target.value)}
             />
             <label  htmlFor="discount1">Company have contract 5% OFF</label>
               </div>
             </div>
             <div className="row">
             <div className="col-md-2 name__title"></div>
               <div className="col-md-6 ml-2">
             <input
               type="radio"
               name="discount"
               className="special"
               id="discount2"
               value="Company have contract free laundry 120.000vnd/day"
               onChange={(e) => setDiscount(e.target.value)}
             />
               <label htmlFor="discount2">Company have contract free laundry 120.000vnd/day</label>
               </div>
             </div>
             <div className="row">
             <div className="col-md-2 name__title"></div>
               <div className="col-md-6 ml-2">
             <input
               type="radio"
               name="discount"
               className="special"
               id="discount3"
               value="Company have contract 5% OFF + free laundry 120.000vnd/day"
               onChange={(e) => setDiscount(e.target.value)}
             />
               <label htmlFor="discount3">Company have contract 5% OFF + free laundry 120.000vnd/day</label>
               </div>
             </div>
             </div>
             </> : ""
           } 
            </div>}
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.vat-invoice")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="vatInvoice"
                   id="no-need"
                   className="VATInvoice"
                   value={t("reservation.n-need")}
                   onClick={(e) => setVat(e.target.value)}
                 />
                 <label htmlFor="no-need">{t("reservation.n-need")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="vatInvoice"
                   id="need"
                   className="VATInvoice"
                   value={t("reservation.need")}
                   onClick={(e) => setVat(e.target.value)}
                 />
                 <label htmlFor="need">{t("reservation.need")}</label>
               </div>
             </div>
               <span className="col-md-6 p-0 required__note">
                 {t("reservation.vat-note")}
               </span>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.pay-method")}
               </div>
               <select
                 style={{ width: "350px" }}
                 value={paymentMethod}
                 className="col-md-2 form__content"
                 id={paymentMethod}
                 onChange={(e) => {
                   setPaymentMethod(e.target.value);
                 }}
               > {statusC === 0 &&
                 payMethod.map((item) => (
                 <option key={item.name} value={item.name}>
                   {item.name}
                 </option>
               ))} 
               {statusC === 1 && 
                 payMethod2.map((item) => (
                   <option key={item.name} value={item.name}>
                     {item.name}
                   </option>
                 ))} 
               </select>
             </div>
           </div>
         </div>
       </div>
        }
         {roomAmount >= 4 && 
         <div className="guest-container">
         <div className="row">
           <div className="guest__information">
             <div className="col-md-12 guest__name-title">
               {t("reservation.guest-info")}
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.name")}
                 <span className="required__note">*</span>
                 <small>{t("reservation.name-note")}</small>
               </div>
               <input
                 placeholder={t("reservation.family-name")}
                 type="text"
                 className={errors.familyName? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 onChange={(e) => {
                   setFamilyName(e.target.value);
                 }}
               />
                {errors.familyName && 
               <p className="col-md-1 error-message">{errors.familyName}</p>}
               <input
                 placeholder={t("reservation.given-name")}
                 type="text"
                 name="gName"
                 className={errors.givenName? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 onChange={(e) => setGivenName(e.target.value)}
               />
                {errors.givenName && 
               <p className="col-md-1 error-message">{errors.givenName}</p>}
               <span className="col-md-4 required__note">
                 {t("reservation.name-required")}
               </span>
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.gender")}
                 <span className="required__note">*</span>
               </div>
               <div className={errors.gender? "col-md-2 form__group validate_failed" : "col-md-2 form__group"}>
                 <input
                   type="radio"
                   name="gender"
                   id="gMale"
                   value="Mr."
                   checked={gender === "Mr."}
                   onChange={(e) => setGender(e.target.value)}
                   
                 />
                 <label htmlFor="gMale">{t("reservation.mr")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="gender"
                   id="gFemale"
                   value="Ms."
                   checked = {gender === "Ms."}
                   onChange={(e) => setGender(e.target.value)}
                 />
                 <label htmlFor="gFemale">{t("reservation.ms")}</label>
               </div>
               {errors.gender && 
               <p className="col-md-2 error-message">{errors.gender}</p>}
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.birth-date")}
                 <span className="required__note">*</span>
               </div>
               <DayPicker />
               {errors.selectedDay && 
               <p className="col-md-1 error-message">{errors.selectedDay}</p>}
               <MonthPicker />
               {errors.selectedMonth&& 
               <p className="col-md-1 error-message">{errors.selectedMonth}</p>}
               <YearPicker />
               {errors.selectedYear && 
               <p className="col-md-1 error-message">{errors.selectedYear}</p>}
             </div>
             {showButton >= 2 && (
               <div className="row">
                 <div className="col-md-12 offset-4">
                   <button
                     className="base__btn btn__send"
                     onClick={handleClick}
                   >
                     {text}
                   </button>
                 </div>
                 {show && (
                   <div className="container">
                     <div className="row guest-information">
                       <div className="col-md-2 name__title">
                         {t("reservation.name")}
                       </div>
                       <input
                         ref={inputRef}
                         placeholder={t("reservation.family-name")}
                         type="text"
                         className="col-md-2 form__content"
                         value={secondFamilyName}
                         onClick={handleSecondFamilyNameClick}
                         onChange={handleSecondFamilyName}
                       />

                       <input
                         ref={input2Ref}
                         placeholder={t("reservation.given-name")}
                         type="text"
                         className=" col-md-2 form__content"
                         value={secondGivenName}
                         onClick={handleSecondGivenNameClick}
                         onChange={handleSecondGivenName}
                       />
                     </div>
                     <div className="row">
                       <div className="col-md-2 name__title">
                         {t("reservation.gender")}
                       </div>
                       <div className="col-md-2">
                         <input
                           type="radio"
                           name="2ndgender"
                           id="2ndgMale"
                           value="male"
                           onChange={(e) => setSecondGender(e.target.value)}
                         />
                         <label htmlFor="gMale">{t("reservation.mr")}</label>
                       </div>
                       <div className="col-md-2">
                         <input
                           type="radio"
                           name="2ndgender"
                           id="2ndgFemale"
                           value="female"
                           onChange={(e) => setSecondGender(e.target.value)}
                         />
                         <label htmlFor="2ndgFemale">
                           {t("reservation.ms")}
                         </label>
                       </div>
                     </div>
                     <div className="row">
                       <div className="col-md-2 name__title">
                         {t("reservation.birth-date")}
                       </div>
                       <SecondDayPicker />
                       <SecondMonthPicker />
                       <SecondYearPicker />
                     </div>
                   </div>
                 )}
               </div>
             )}
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.booker")}
               </div>
               <div className="col-md-6">
                 <input
                   type="radio"
                   name="Booker"
                   id="booker"
                   value={`${t('reservation.same-person')}`}
                   checked={status === 0}
                   onClick={(e) => {
                     handleSelected(0);
                    
                   }}
                   onChange={(e) => setBooker(e.target.value)}
                 />
                 <label htmlFor="booker">
                   {t("reservation.same-person")}
                 </label>
                 <br />
                 <input
                   type="radio"
                   name="Booker"
                   id="booker"
                   value={`${t('reservation.diff-person')}`}
                   checked={status === 1}
                   onClick={(e) => {
                     handleSelected(1);
                     
                   }}
                   onChange={(e) => setBooker(e.target.value)}
                 />
                 <label htmlFor="booker">
                   {t("reservation.diff-person")}
                 </label>
               </div>
             </div>
             {status === 1 && 
              <div className="row">
              <div className="col-md-2 name__title">{t("reservation.name")}</div>
              <input
                ref={input3Ref}
                type="text"
                className="booker-name form__content col-md-2"
                value={bookerName}
                placeholder={t("reservation.name")}
                onChange={handleChangeBookerName}
              />
            </div>}
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.email")}
                 <span className="col-md-2 required__note">*</span>
               </div>
               <input
                 type="text"
                 className={errors.email? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 placeholder={t("reservation.email")}
                 onChange={(e) => setEmail(e.target.value)}
               />
               <span className="col-md-6 required__note">
                 {t("reservation.email-note")}
               </span>
               {errors.email && 
               <p className="col-md-1 error-message">{errors.email}</p>}
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.phone")}
                 <span className="col-md-2 required__note">*</span>
               </div>
               <input
                 type="text"
                 className={errors.phone? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 id=""
                 placeholder={t("reservation.phone")}
                 onKeyPress={(event) => {
                   if (!/[0-9]/.test(event.key)) {
                     event.preventDefault();
                   }
                 }}
                 onChange={(e) => setPhone(e.target.value)}
               />
               <span className="col-md-6 required__note">
                 {t("reservation.phone-note")}
               </span>
               {errors.phone && 
               <p className="col-md-1 error-message">{errors.phone}</p>}
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.room-type")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="roomType"
                   id="smk"
                   value={t("reservation.smk")}                       
                   checked =  {roomType === `${t("reservation.smk")}`}
                   onClick={(e) => setRoomType(e.target.value)}
                 />
                 <label htmlFor="smk">{t("reservation.smk")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="roomType"
                   id="no-smk"
                   checked = {roomType === `${t("reservation.non-smk")}`}
                   value={t("reservation.non-smk")}
                   onClick={(e) => setRoomType(e.target.value)}
                 />
                 <label htmlFor="no-smk">{t("reservation.non-smk")}</label>
               </div>
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.contract")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   id="hContract"
                   className="Contract"
                   value={t("reservation.n-cont")}
                   checked={statusC == 0}
                   onClick={(e) => {
                     setContract(e.target.value);
                     handleSelectedCompany(0);
                   }}
                 />
                 <label htmlFor="hContract">{t("reservation.n-cont")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="contract"
                   id="hContract"
                   className="Contract"
                   value={t("reservation.h-cont")}
                   checked={statusC == 1}
                   onClick={(e) => {
                     setContract(e.target.value);
                     handleSelectedCompany(1);
                   }}
                 />
                 <label htmlFor="hContract">{t("reservation.h-cont")}</label>
               </div>
             </div>
             {statusC == 1 && 
              <div className="row">
              <div className="col-md-2 name__title">{t("reservation.company")}</div>
              <input
                ref={input4Ref}
                type="text"
                className="form__content col-md-4"
                placeholder={t("reservation.company")}
                value={searchCompany}
                onChange={handleChangeCompanyName}
              />
              {searchCompany && company ?
             //  <div className="row">
             //  <div className="col-md-2 name__title"></div>
              <ul
              style={{border:"1px solid #000", height:"200px", overflowY:"scroll", textTransform:"uppercase"}}
              className="form__content col-md-4">
               {searchCompany.map((item)=> (
                 <li onClick={() => handleChooseCompany(`${item.name}`)} style={{borderBottom:"1px solid #000", padding:'10px', cursor: "pointer", display:"inline-block"}} key={item.company_id} value={item.name}>{item.name}</li>
               ))}
              </ul>
             //  </div>
              : <span className=" col-md-4 required__note">{t("reservation.company-note")}</span>
            }
              {company  ?
              <>
              <div className="row">
              <div className="col-md-2 name__title">Choice of Discount: </div>
              <div className="row">
             <div className="col-md-2 name__title"></div>
               <div className="col-md-6 ml-2">
              <input
               type="radio"
               name="discount"
               className="special"
               id="discount1"
               value='Company have contract 5% OFF'
               onChange={(e) => setDiscount(e.target.value)}
             />
             <label  htmlFor="discount1">Company have contract 5% OFF</label>
               </div>
             </div>
             <div className="row">
             <div className="col-md-2 name__title"></div>
               <div className="col-md-6 ml-2">
             <input
               type="radio"
               name="discount"
               className="special"
               id="discount2"
               value="Company have contract free laundry 120.000vnd/day"
               onChange={(e) => setDiscount(e.target.value)}
             />
               <label htmlFor="discount2">Company have contract free laundry 120.000vnd/day</label>
               </div>
             </div>
             <div className="row">
             <div className="col-md-2 name__title"></div>
               <div className="col-md-6 ml-2">
             <input
               type="radio"
               name="discount"
               className="special"
               id="discount3"
               value="Company have contract 5% OFF + free laundry 120.000vnd/day"
               onChange={(e) => setDiscount(e.target.value)}
             />
               <label htmlFor="discount3">Company have contract 5% OFF + free laundry 120.000vnd/day</label>
               </div>
             </div>
             </div>
             </> : ""
           } 
            </div>}
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.vat-invoice")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="vatInvoice"
                   id="no-need"
                   className="VATInvoice"
                   value={t("reservation.n-need")}
                   onClick={(e) => setVat(e.target.value)}
                 />
                 <label htmlFor="no-need">{t("reservation.n-need")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="vatInvoice"
                   id="need"
                   className="VATInvoice"
                   value={t("reservation.need")}
                   onClick={(e) => setVat(e.target.value)}
                 />
                 <label htmlFor="need">{t("reservation.need")}</label>
               </div>
             </div>
               <span className="col-md-6 p-0 required__note">
                 {t("reservation.vat-note")}
               </span>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.pay-method")}
               </div>
               <select
                 style={{ width: "350px" }}
                 value={paymentMethod}
                 className="col-md-2 form__content"
                 id={paymentMethod}
                 onChange={(e) => {
                   setPaymentMethod(e.target.value);
                 }}
               > {statusC === 0 &&
                 payMethod.map((item) => (
                 <option key={item.name} value={item.name}>
                   {item.name}
                 </option>
               ))} 
               {statusC === 1 && 
                 payMethod2.map((item) => (
                   <option key={item.name} value={item.name}>
                     {item.name}
                   </option>
                 ))} 
               </select>
             </div>
           </div>
         </div>
       </div>
        } 
        {roomAmount >= 5 && 
         <div className="guest-container">
         <div className="row">
           <div className="guest__information">
             <div className="col-md-12 guest__name-title">
               {t("reservation.guest-info")}
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.name")}
                 <span className="required__note">*</span>
                 <small>{t("reservation.name-note")}</small>
               </div>
               <input
                 placeholder={t("reservation.family-name")}
                 type="text"
                 className={errors.familyName? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 onChange={(e) => {
                   setFamilyName(e.target.value);
                 }}
               />
                {errors.familyName && 
               <p className="col-md-1 error-message">{errors.familyName}</p>}
               <input
                 placeholder={t("reservation.given-name")}
                 type="text"
                 name="gName"
                 className={errors.givenName? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 onChange={(e) => setGivenName(e.target.value)}
               />
                {errors.givenName && 
               <p className="col-md-1 error-message">{errors.givenName}</p>}
               <span className="col-md-4 required__note">
                 {t("reservation.name-required")}
               </span>
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.gender")}
                 <span className="required__note">*</span>
               </div>
               <div className={errors.gender? "col-md-2 form__group validate_failed" : "col-md-2 form__group"}>
                 <input
                   type="radio"
                   name="gender"
                   id="gMale"
                   value="Mr."
                   checked={gender === "Mr."}
                   onChange={(e) => setGender(e.target.value)}
                   
                 />
                 <label htmlFor="gMale">{t("reservation.mr")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="gender"
                   id="gFemale"
                   value="Ms."
                   checked = {gender === "Ms."}
                   onChange={(e) => setGender(e.target.value)}
                 />
                 <label htmlFor="gFemale">{t("reservation.ms")}</label>
               </div>
               {errors.gender && 
               <p className="col-md-2 error-message">{errors.gender}</p>}
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.birth-date")}
                 <span className="required__note">*</span>
               </div>
               <DayPicker />
               {errors.selectedDay && 
               <p className="col-md-1 error-message">{errors.selectedDay}</p>}
               <MonthPicker />
               {errors.selectedMonth&& 
               <p className="col-md-1 error-message">{errors.selectedMonth}</p>}
               <YearPicker />
               {errors.selectedYear && 
               <p className="col-md-1 error-message">{errors.selectedYear}</p>}
             </div>
             {showButton >= 2 && (
               <div className="row">
                 <div className="col-md-12 offset-4">
                   <button
                     className="base__btn btn__send"
                     onClick={handleClick}
                   >
                     {text}
                   </button>
                 </div>
                 {show && (
                   <div className="container">
                     <div className="row guest-information">
                       <div className="col-md-2 name__title">
                         {t("reservation.name")}
                       </div>
                       <input
                         ref={inputRef}
                         placeholder={t("reservation.family-name")}
                         type="text"
                         className="col-md-2 form__content"
                         value={secondFamilyName}
                         onClick={handleSecondFamilyNameClick}
                         onChange={handleSecondFamilyName}
                       />

                       <input
                         ref={input2Ref}
                         placeholder={t("reservation.given-name")}
                         type="text"
                         className=" col-md-2 form__content"
                         value={secondGivenName}
                         onClick={handleSecondGivenNameClick}
                         onChange={handleSecondGivenName}
                       />
                     </div>
                     <div className="row">
                       <div className="col-md-2 name__title">
                         {t("reservation.gender")}
                       </div>
                       <div className="col-md-2">
                         <input
                           type="radio"
                           name="2ndgender"
                           id="2ndgMale"
                           value="male"
                           onChange={(e) => setSecondGender(e.target.value)}
                         />
                         <label htmlFor="gMale">{t("reservation.mr")}</label>
                       </div>
                       <div className="col-md-2">
                         <input
                           type="radio"
                           name="2ndgender"
                           id="2ndgFemale"
                           value="female"
                           onChange={(e) => setSecondGender(e.target.value)}
                         />
                         <label htmlFor="2ndgFemale">
                           {t("reservation.ms")}
                         </label>
                       </div>
                     </div>
                     <div className="row">
                       <div className="col-md-2 name__title">
                         {t("reservation.birth-date")}
                       </div>
                       <SecondDayPicker />
                       <SecondMonthPicker />
                       <SecondYearPicker />
                     </div>
                   </div>
                 )}
               </div>
             )}
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.booker")}
               </div>
               <div className="col-md-6">
                 <input
                   type="radio"
                   name="Booker"
                   id="booker"
                   value={`${t('reservation.same-person')}`}
                   checked={status === 0}
                   onClick={(e) => {
                     handleSelected(0);
                    
                   }}
                   onChange={(e) => setBooker(e.target.value)}
                 />
                 <label htmlFor="booker">
                   {t("reservation.same-person")}
                 </label>
                 <br />
                 <input
                   type="radio"
                   name="Booker"
                   id="booker"
                   value={`${t('reservation.diff-person')}`}
                   checked={status === 1}
                   onClick={(e) => {
                     handleSelected(1);
                     
                   }}
                   onChange={(e) => setBooker(e.target.value)}
                 />
                 <label htmlFor="booker">
                   {t("reservation.diff-person")}
                 </label>
               </div>
             </div>
             {status === 1 && 
              <div className="row">
              <div className="col-md-2 name__title">{t("reservation.name")}</div>
              <input
                ref={input3Ref}
                type="text"
                className="booker-name form__content col-md-2"
                value={bookerName}
                placeholder={t("reservation.name")}
                onChange={handleChangeBookerName}
              />
            </div>}
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.email")}
                 <span className="col-md-2 required__note">*</span>
               </div>
               <input
                 type="text"
                 className={errors.email? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 placeholder={t("reservation.email")}
                 onChange={(e) => setEmail(e.target.value)}
               />
               <span className="col-md-6 required__note">
                 {t("reservation.email-note")}
               </span>
               {errors.email && 
               <p className="col-md-1 error-message">{errors.email}</p>}
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.phone")}
                 <span className="col-md-2 required__note">*</span>
               </div>
               <input
                 type="text"
                 className={errors.phone? "col-md-2 form__content validate_failed" : "col-md-2 form__content"}
                 id=""
                 placeholder={t("reservation.phone")}
                 onKeyPress={(event) => {
                   if (!/[0-9]/.test(event.key)) {
                     event.preventDefault();
                   }
                 }}
                 onChange={(e) => setPhone(e.target.value)}
               />
               <span className="col-md-6 required__note">
                 {t("reservation.phone-note")}
               </span>
               {errors.phone && 
               <p className="col-md-1 error-message">{errors.phone}</p>}
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.room-type")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="roomType"
                   id="smk"
                   value={t("reservation.smk")}                       
                   checked =  {roomType === `${t("reservation.smk")}`}
                   onClick={(e) => setRoomType(e.target.value)}
                 />
                 <label htmlFor="smk">{t("reservation.smk")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="roomType"
                   id="no-smk"
                   checked = {roomType === `${t("reservation.non-smk")}`}
                   value={t("reservation.non-smk")}
                   onClick={(e) => setRoomType(e.target.value)}
                 />
                 <label htmlFor="no-smk">{t("reservation.non-smk")}</label>
               </div>
             </div>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.contract")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   id="hContract"
                   className="Contract"
                   value={t("reservation.n-cont")}
                   checked={statusC == 0}
                   onClick={(e) => {
                     setContract(e.target.value);
                     handleSelectedCompany(0);
                   }}
                 />
                 <label htmlFor="hContract">{t("reservation.n-cont")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="contract"
                   id="hContract"
                   className="Contract"
                   value={t("reservation.h-cont")}
                   checked={statusC == 1}
                   onClick={(e) => {
                     setContract(e.target.value);
                     handleSelectedCompany(1);
                   }}
                 />
                 <label htmlFor="hContract">{t("reservation.h-cont")}</label>
               </div>
             </div>
             {statusC == 1 && 
              <div className="row">
              <div className="col-md-2 name__title">{t("reservation.company")}</div>
              <input
                ref={input4Ref}
                type="text"
                className="form__content col-md-4"
                placeholder={t("reservation.company")}
                value={searchCompany}
                onChange={handleChangeCompanyName}
              />
              {searchCompany && company ?
             //  <div className="row">
             //  <div className="col-md-2 name__title"></div>
              <ul
              style={{border:"1px solid #000", height:"200px", overflowY:"scroll", textTransform:"uppercase"}}
              className="form__content col-md-4">
               {searchCompany.map((item)=> (
                 <li onClick={() => handleChooseCompany(`${item.name}`)} style={{borderBottom:"1px solid #000", padding:'10px', cursor: "pointer", display:"inline-block"}} key={item.company_id} value={item.name}>{item.name}</li>
               ))}
              </ul>
             //  </div>
              : <span className=" col-md-4 required__note">{t("reservation.company-note")}</span>
            }
              {company  ?
              <>
              <div className="row">
              <div className="col-md-2 name__title">Choice of Discount: </div>
              <div className="row">
             <div className="col-md-2 name__title"></div>
               <div className="col-md-6 ml-2">
              <input
               type="radio"
               name="discount"
               className="special"
               id="discount1"
               value='Company have contract 5% OFF'
               onChange={(e) => setDiscount(e.target.value)}
             />
             <label  htmlFor="discount1">Company have contract 5% OFF</label>
               </div>
             </div>
             <div className="row">
             <div className="col-md-2 name__title"></div>
               <div className="col-md-6 ml-2">
             <input
               type="radio"
               name="discount"
               className="special"
               id="discount2"
               value="Company have contract free laundry 120.000vnd/day"
               onChange={(e) => setDiscount(e.target.value)}
             />
               <label htmlFor="discount2">Company have contract free laundry 120.000vnd/day</label>
               </div>
             </div>
             <div className="row">
             <div className="col-md-2 name__title"></div>
               <div className="col-md-6 ml-2">
             <input
               type="radio"
               name="discount"
               className="special"
               id="discount3"
               value="Company have contract 5% OFF + free laundry 120.000vnd/day"
               onChange={(e) => setDiscount(e.target.value)}
             />
               <label htmlFor="discount3">Company have contract 5% OFF + free laundry 120.000vnd/day</label>
               </div>
             </div>
             </div>
             </> : ""
           } 
            </div>}
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.vat-invoice")}
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="vatInvoice"
                   id="no-need"
                   className="VATInvoice"
                   value={t("reservation.n-need")}
                   onClick={(e) => setVat(e.target.value)}
                 />
                 <label htmlFor="no-need">{t("reservation.n-need")}</label>
               </div>
               <div className="col-md-2">
                 <input
                   type="radio"
                   name="vatInvoice"
                   id="need"
                   className="VATInvoice"
                   value={t("reservation.need")}
                   onClick={(e) => setVat(e.target.value)}
                 />
                 <label htmlFor="need">{t("reservation.need")}</label>
               </div>
             </div>
               <span className="col-md-6 p-0 required__note">
                 {t("reservation.vat-note")}
               </span>
             <div className="row">
               <div className="col-md-2 name__title">
                 {t("reservation.pay-method")}
               </div>
               <select
                 style={{ width: "350px" }}
                 value={paymentMethod}
                 className="col-md-2 form__content"
                 id={paymentMethod}
                 onChange={(e) => {
                   setPaymentMethod(e.target.value);
                 }}
               > {statusC === 0 &&
                 payMethod.map((item) => (
                 <option key={item.name} value={item.name}>
                   {item.name}
                 </option>
               ))} 
               {statusC === 1 && 
                 payMethod2.map((item) => (
                   <option key={item.name} value={item.name}>
                     {item.name}
                   </option>
                 ))} 
               </select>
             </div>
           </div>
         </div>
       </div>
        }           */}

        <div className="other-container">
          <div className="row">
            <div className="col-md-2 name__title">
              {t("reservation.requirement")}
              <br />
              <small>{t("reservation.requirement-note")}</small>
            </div>
            <div className="col-md-10">
              <input
                type="checkbox"
                className="special"
                id="pickUp"
                checked={statusPU}
                onChange={(e) => setStatusPU(e.target.checked)}
              />
              <label htmlFor="pickUp">{t('reservation.pickup')}</label>
              <br />
              {statusPU && (
                <div className="row">
                  <Flatpickr
                    value={pickupTime}
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      minTime: "00:00",
                      time_24hr: true,
                    }}
                    placeholder={t('reservation.pickupTime')}
                    onChange={handlePickUpTimeChange}
                    className="col-md-4 form__content webkit-appearance"
                  />
                  <input
                    ref={input5Ref}
                    type="text"
                    className="booker-name form__content col-md-3"
                    value={pickupNumber}
                    placeholder={t('reservation.pickupNumber')}
                    onChange={handlePickupNumber}
                    onClick={handlePickUpNumberClick}
                  />
                  <span className="required__note pre-line col-md-4">
                    {t('reservation.DO_PU_note')}
                  </span>
                </div>
              )}
              <input
                type="checkbox"
                className="special"
                id="dropOff"
                checked={statusDO}
                onChange={(e) => setStatusDO(e.target.checked)}
              />
              <label htmlFor="dropOff">{t('reservation.dropOff')}</label>
              <br />
              {statusDO && (
                <div className="row">
                  <Flatpickr
                    value={dropOffTime}
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      minTime: "00:00",
                      time_24hr: true,
                    }}
                    placeholder={t('reservation.dropOffTime')}
                    onChange={handleDropOffTimeChange}
                    className="col-md-4 form__content webkit-appearance"
                  />
                  <input
                    ref={input6Ref}
                    type="text"
                    className="booker-name form__content col-md-2"
                    value={dropOffNumber}
                    placeholder={t('reservation.dropOffNumber')}
                    onChange={handleDropOffNumber}
                    onClick={handleDropOffNumberClick}
                  />
                  <span className="required__note pre-line col-md-4">
                  {t('reservation.DO_PU_note')}
                  </span>
                </div>
              )}
              <input
                type="checkbox"
                className="special"
                id="earlyIn"
                checked={statusEI}
                onChange={(e) => setStatusEI(e.target.checked)}
              />
              <label htmlFor="earlyIn">{t('reservation.earlyIn')}</label>
              <br />
              {statusEI && (
                <div className="row">
                  <Flatpickr
                    value={earlyIn}
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      minTime: "00:00",
                      time_24hr: true,
                    }}
                    placeholder={t('reservation.earlyInTime')}
                    onChange={handleEarlyInTimeChange}
                    className="col-md-4 form__content webkit-appearance"
                  />
                  {earlyInNote.map((item)=> (
                  <span className="required__note pre-line col-md-12">
                    {item.note}
                  </span>
                  ))}
                </div>
              )}
              <input
                type="checkbox"
                className="special"
                id="lateOut"
                checked={statusLO}
                onChange={(e) => setStatusLO(e.target.checked)}
              />
              <label htmlFor="lateOut">{t('reservation.lateOut')}</label>
              <br />
              {statusLO && (
                <div className="row">
                  <Flatpickr
                    value={lateOut}
                    options={{
                      dateFormat: "H:i",
                      enableTime: true,
                      noCalendar: true,
                      minTime: "00:00",
                      time_24hr: true,
                    }}
                    placeholder={t('reservation.lateOutTime')}
                    onChange={handleLateOutTimeChange}
                    className="col-md-4 form__content webkit-appearance"
                  />
                  {lateOutNote.map((item)=>(
                  <span className="required__note pre-line col-md-12">
                    {item.note}
                  </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-6">
              <textarea
                className="text-note"
                cols="40"
                rows="6"
                placeholder={t("reservation.request")}
                onChange={(e) => setSpecialRequest(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 offset-4">
              <button
                id="send"
                className="base__btn btn__send"
                type="submit"
              >
                {t("reservation.send")}
              </button>
            </div>
          </div>
          <div className="row">
            <span className="required__note pre-line">
              {t("reservation.attention-note")}
            </span>
          </div>
        </div>
      </div>
    </div>
    </form>
  </div>
  );
}
export default Reservation;
