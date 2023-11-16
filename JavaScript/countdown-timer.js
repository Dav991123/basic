var settings = {
    JavaPrograming: 'April 25, 2019 23:35:00',//<article  class='loading'><span class='countdown Java_countdown'></span></article>
    HTMLPrograming: 'April 23, 2019 20:10:50',//<article class="loading"><span class="countdown HTML_countdown"></span></article>
    AndroidPrograming: 'May 2, 2018 00:00:00',//<article class="loading"><span class="countdown Android_countdown"></span></article>
    PythonPrograming: 'May 3, 2018 00:00:00',//<article class="loading"><span class="countdown Python_countdown"></span></article>
    LinuxAdministration: 'May 20, 2018 00:00:00'//<article class="loading"><span class="countdown Linux_countdown"></span></article>
  }



          //JavaTimer
      const countdownJava = document.querySelector(".Java_countdown");
      const JavaTimer = new Date(settings.JavaPrograming).getTime();
      const IntvlJava = setInterval(() => {
      var now = new Date().getTime();
      const DistanceJava = JavaTimer - now;
      const DaysJava = Math.floor(DistanceJava / (1000 * 60 * 60 * 24));
      const HoursJava = Math.floor((DistanceJava % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const MinsJava =  Math.floor((DistanceJava % (1000 * 60 * 60)) / (1000 * 60));
      const SecondsJava =  Math.floor((DistanceJava % (1000 * 60)) / 1000);
      countdownJava.innerHTML = `
      <div>${DaysJava}<span>Օր</span></div>
      <div>${HoursJava}<span>Ժամ</span></div>
      <div>${MinsJava}<span>Րոպե</span></div>
      <div>${SecondsJava}<span>Վայրկյան</span></div>`;
      if(DistanceJava < 0 ) {
       clearInterval(IntvlJava);
     }

      }, 1000);

        //JavaTimer

        //HTML timer
      const countdownHTML = document.querySelector(".HTML_countdown");
      const HTMLTimer = new Date(settings.HTMLPrograming).getTime();
      const IntvlHTML = setInterval(() => {
      var now = new Date().getTime();
      const DistanceHTML = HTMLTimer - now;
      const DaysHTML = Math.floor(DistanceHTML / (1000 * 60 * 60 * 24));
      const HoursHTML = Math.floor((DistanceHTML % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const MinsHTML =  Math.floor((DistanceHTML % (1000 * 60 * 60)) / (1000 * 60));
      const SecondsHTML =  Math.floor((DistanceHTML % (1000 * 60)) / 1000);
      countdownHTML.innerHTML = `
      <div>${DaysHTML}<span>Օր</span></div>
      <div>${HoursHTML}<span>Ժամ</span></div>
      <div>${MinsHTML}<span>Րոպե</span></div>
      <div>${SecondsHTML}<span>Վայրկյան</span></div>`;
      if(DistanceHTML < 0 ) {
      clearInterval(IntvlHTML);
      }

      }, 1000);
        //HTML timer


      //AndroidPrograming
          /*  const countdownAndroid = document.querySelector(".Android_countdown");
              const AndroidTimer = new Date(settings.AndroidPrograming).getTime();
              const IntvlAndroid = setInterval(() => {
              var now = new Date().getTime();
              const DistanceAndroid = AndroidTimer - now;
              const DaysAndroid = Math.floor(DistanceAndroid / (1000 * 60 * 60 * 24));
              const HoursAndroid = Math.floor((DistanceAndroid % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const MinsAndroid =  Math.floor((DistanceAndroid % (1000 * 60 * 60)) / (1000 * 60));
              const SecondsAndroid =  Math.floor((DistanceAndroid % (1000 * 60)) / 1000);
              countdownAndroid.innerHTML = `
              <div>${DaysAndroid}<span>Օր</span></div>
              <div>${HoursAndroid}<span>Ժամ</span></div>
              <div>${MinsAndroid}<span>Րոպե</span></div>
              <div>${SecondsAndroid}<span>Վայրկյան</span></div>`;
              if(DistanceAndroid < 0 ) {
              clearInterval(IntvlAndroid);
              }
            }, 1000);   */
      //AndroidPrograming

      //  PythonPrograming
          /*    const countdownPython = document.querySelector(".Python_countdown");
                const PythonTimer = new Date(settings.PythonPrograming).getTime();
                const IntvlPython = setInterval(() => {
                var now = new Date().getTime();
                const DistancePython = PythonTimer - now;
                const DaysPython= Math.floor(DistancePython / (1000 * 60 * 60 * 24));
                const HoursPython = Math.floor((DistancePython % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const MinsPython =  Math.floor((DistancePython % (1000 * 60 * 60)) / (1000 * 60));
                const SecondsPython =  Math.floor((DistancePython % (1000 * 60)) / 1000);
                countdownPython.innerHTML = `
                <div>${DaysPython}<span>Օր</span></div>
                <div>${HoursPython}<span>Ժամ</span></div>
                <div>${MinsPython}<span>Րոպե</span></div>
                <div>${SecondsPython}<span>Վայրկյան</span></div>`;
                if(DistancePython < 0 ) {
                clearInterval(IntvlPython);
                }
              }, 1000);  */
      //  PythonPrograming

      //  LinuxAdministration
        /*    const countdownLinux = document.querySelector(".Linux_countdown");
              const LinuxTimer = new Date(settings.LinuxAdministration).getTime();
              const IntvlLinux = setInterval(() => {
              var now = new Date().getTime();
              const DistanceLinux = LinuxTimer - now;
              const DaysLinux= Math.floor(DistanceLinux / (1000 * 60 * 60 * 24));
              const HoursLinux = Math.floor((DistanceLinux % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const MinsLinux =  Math.floor((DistanceLinux % (1000 * 60 * 60)) / (1000 * 60));
              const SecondsLinux =  Math.floor((DistanceLinux % (1000 * 60)) / 1000);
              countdownLinux.innerHTML = `
              <div>${DaysLinux}<span>Օր</span></div>
              <div>${HoursLinux}<span>Ժամ</span></div>
              <div>${MinsLinux}<span>Րոպե</span></div>
              <div>${SecondsLinux}<span>Վայրկյան</span></div>`;
              if(DistanceLinux < 0 ) {
              clearInterval(IntvlLinux);
              }
            }, 1000);    */
      //  LinuxAdministration
