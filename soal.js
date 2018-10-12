function Jawaban()
            {
                // tanya()
                var soal = {
                               level1:[['password'],['select'],['textarea']], // jawaban soal huruf H
                               level2:[['position'],['parent'],['tostring'],['import']], // jawaban soal huruf A
                               level3:[['filter'],['fieldset'],['typeof']], // jawaban soal huruf C
                               level4:[['database'],['display'],['padding']], // jawaban soal huruf K
                               level5:[['caption'],['template']] // jawaban soal huruf T
                            }
                            
                var ans1 = []
                var ans2 = []
                var ans3 = []
                var ans4 = []
                var result0,result1,result2,result3
                var arr  = document.getElementsByClassName("id1")
                var arr2 = document.getElementsByClassName("id2")
                var arr3 = document.getElementsByClassName("id3")
                var arr4 = document.getElementsByClassName("id4")
                
                for(i=0 ; i < arr.length; i++)
                {
                    ans1.push(arr[i].value.toLowerCase())
                    result0 = ans1.join('')
                }
                
                for(i=0 ; i < arr2.length; i++)
                {
                    ans2.push(arr2[i].value.toLowerCase())
                    result1 = ans2.join('')
                }
                
                for(i=0 ; i < arr3.length; i++)
                {
                    ans3.push(arr3[i].value.toLowerCase())
                    result2 = ans3.join('')
                }
                
                for(i=0 ; i < arr4.length; i++)
                {
                    ans4.push(arr4[i].value.toLowerCase())
                    result3 = ans4.join('')
                }

                // console.log(result0)
                // console.log(result1)
                // console.log(result2)
                // console.log(result3)
                // console.log(arr)
                // console.log(arr2)
                // console.log(soal[0])
                // console.log(soal[1])
                // console.log(soal[2])
                
                if(result0 == soal.level1[0] && result1 == soal.level1[1] && result2 == soal.level1[2])
                {
                    
                    return true
                }

                else if(result0 == soal.level2[0] && result1 == soal.level2[1] && result2 == soal.level2[2] && result3 == soal.level2[3])
                {
                    
                    return true
                }

                else if(result0 == soal.level3[0] && result1 == soal.level3[1] && result2 == soal.level3[2])
                {
                    
                    return true
                }

                else if(result0 == soal.level4[0] && result1 == soal.level4[1] && result2 == soal.level4[2])
                {
                    
                    return true
                }

                else if(result0 == soal.level5[0] && result1 == soal.level5[1])
                {
                    
                    alert("Selamat kamu sudah menyelesikan soal Level 1 !!")
                    return true
                }
                
                else
                {
                
                alert("Jawaban anda belum tepat silahkan isi kembali !")
            
                if(result0 != soal[0])
                {
                    // alert("Jawaban anda belum tepat silahkan isi kembali !")
                    for(i=0 ; i < arr.length; i++)
                    {
                        arr[i].value = null
                    }
                    // return false
                }
                
                if(result1 != soal[1])
                {
                    // alert("Jawaban anda belum tepat silahkan isi kembali !")
                    for(i=0 ; i < arr2.length; i++)
                    {
                        arr2[i].value = null
                    }
                    // return false
                }
                
                if(result2 != soal[2])
                {
                    // alert("Jawaban anda belum tepat silahkan isi kembali !")
                    for(i=0 ; i < arr3.length; i++)
                    {
                        arr3[i].value = null
                    }
                    // return false
                }
                if(result3 != soal[3])
                {
                    // alert("Jawaban anda belum tepat silahkan isi kembali !")
                    for(i=0 ; i < arr4.length; i++)
                    {
                        arr4[i].value = null
                    }
                    // return false
                }
                return false
            }   
        }