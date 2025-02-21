function Dateofbirth() {
                const getDob = document.getElementById("inputDob").value;
                const getCd = document.getElementById("inputCd").value;
              
                if (!getDob || !getCd) {
                  alert("Enter data in both fields");
                  return;
                }
              
                const dob = new Date(getDob);
                const cd = new Date(getCd);
              
                let age = cd.getFullYear() - dob.getFullYear();
                const monthDiff = cd.getMonth() - dob.getMonth();
              
                if (monthDiff < 0 || (monthDiff === 0 && cd.getData() < dob.getDob())) {
                  age--;
                } else {
                  console.log("Error");
                }
              
                document.getElementById(
                  "currentAge"
                ).textContent = `Your age is ${age} years old.`;
              }
              