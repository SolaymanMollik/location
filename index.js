// Haversine Formula: দূরত্ব মাপার গণিত
const getDis = (getLatitude, getLongitude) => {
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // পৃথিবীর ব্যাসার্ধ কিলোমিটারে
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // দূরত্ব কিলোমিটারে
  }

  // আপনার বর্তমান অবস্থান থেকে গন্তব্য পর্যন্ত দূরত্ব বের করুন
  const myLatitude = 22.6395; // আপনার Latitude (যেমন: ঝালকাঠির)
  const myLongitude = 90.211; // আপনার Longitude
  const targetLatitude = getLatitude; // গন্তব্যের Latitude
  const targetLongitude = getLongitude; // গন্তব্যের Longitude

  const distance = calculateDistance(
    myLatitude,
    myLongitude,
    targetLatitude,
    targetLongitude
  );
  document.write(`Distance: ${distance.toFixed(2)} km`);
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const accuracy = position.coords.accuracy; // মিটার ইউনিটে নির্ভুলতা

      document.write(`Latitude: ${latitude}, Longitude: ${longitude}`);
      document.write(`Accuracy: ${accuracy} meters`);

      getDis(latitude, longitude);
    },
    (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.error("ব্যবহারকারী লোকেশন অনুমতি দেননি।");
          break;
        case error.POSITION_UNAVAILABLE:
          console.error("লোকেশন তথ্য পাওয়া যাচ্ছে না।");
          break;
        case error.TIMEOUT:
          console.error("লোকেশন রিকোয়েস্ট টাইমআউট হয়েছে।");
          break;
        default:
          console.error("অজানা ত্রুটি:", error.message);
      }
    }
  );
} else {
  console.log("Geolocation API আপনার ব্রাউজারে সাপোর্ট করে না।");
}
