qb();
//全部
function qb() {
    let qb = document.getElementsByClassName("mfsyAll")[0];
    let xhr = new XMLHttpRequest() || new ActiveXObject();
    xhr.open("get", "http://1.15.132.9:3000/useing/public");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                qb.innerHTML = "";
                let obj = JSON.parse(xhr.responseText);
                for (let i = 0; i < 2; i++) {
                    for (let j = 0; j < 8; j++) {
                        let num = Math.round(Math.random() * 3);
                        if (num == 0) {
                            if (obj[j].info_ty == "首发") {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span>${obj[j].totalnum}</span><span>${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_jh">${obj[j].endTime}</p>
                    <span class="sf">${obj[j].info_ty}</span>
                </div>`;
                            } else {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span>${obj[j].totalnum}</span><span>${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_jh">${obj[j].endTime}</p>
                    <span class="tys">${obj[j].info_ty}</span>
                </div>`;
                            }
                        } else if (num == 1) {
                            if (obj[j].info_ty == "首发") {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span class="color_ls_pd">${obj[j].totalnum}</span><span class="color_ls_pd">${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_ls">${obj[j].endTime}</p>
                    <span class="sf">${obj[j].info_ty}</span>
                </div>`;
                            } else {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span class="color_ls_pd">${obj[j].totalnum}</span><span class="color_ls_pd">${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_ls">${obj[j].endTime}</p>
                    <span class="tys">${obj[j].info_ty}</span>
                </div>`;
                            }
                        } else {
                            if (obj[j].info_ty == "首发") {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span class="color_ls_hb">${obj[j].totalnum}</span><span class="color_ls_hb">${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_hb">${obj[j].endTime}</p>
                    <span class="sf">${obj[j].info_ty}</span>
                </div>`;
                            } else {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span class="color_ls_hb">${obj[j].totalnum}</span><span class="color_ls_hb">${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_hb">${obj[j].endTime}</p>
                    <span class="tys">${obj[j].info_ty}</span>
                </div>`;
                            }
                        }
                    }
                }
            }
        }
    }
}

//申请中
function sqz() {
    let qb = document.getElementsByClassName("mfsyAll")[0];
    let xhr = new XMLHttpRequest() || new ActiveXObject();
    xhr.open("get", "http://1.15.132.9:3000/useing/master");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                qb.innerHTML = "";
                let obj = JSON.parse(xhr.responseText);
                for (let i = 0; i < 2; i++) {
                    for (let j = 0; j < 8; j++) {
                        let num = Math.round(Math.random() * 3);
                        if (num == 0) {
                            if (obj[j].info_ty == "首发") {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span>${obj[j].totalnum}</span><span>${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_jh">${obj[j].endTime}</p>
                    <span class="sf">${obj[j].info_ty}</span>
                </div>`;
                            } else {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span>${obj[j].totalnum}</span><span>${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_jh">${obj[j].endTime}</p>
                    <span class="tys">${obj[j].info_ty}</span>
                </div>`;
                            }
                        } else if (num == 1) {
                            if (obj[j].info_ty == "首发") {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span class="color_ls_pd">${obj[j].totalnum}</span><span class="color_ls_pd">${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_ls">${obj[j].endTime}</p>
                    <span class="sf">${obj[j].info_ty}</span>
                </div>`;
                            } else {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span class="color_ls_pd">${obj[j].totalnum}</span><span class="color_ls_pd">${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_ls">${obj[j].endTime}</p>
                    <span class="tys">${obj[j].info_ty}</span>
                </div>`;
                            }
                        } else {
                            if (obj[j].info_ty == "首发") {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span class="color_ls_hb">${obj[j].totalnum}</span><span class="color_ls_hb">${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_hb">${obj[j].endTime}</p>
                    <span class="sf">${obj[j].info_ty}</span>
                </div>`;
                            } else {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span class="color_ls_hb">${obj[j].totalnum}</span><span class="color_ls_hb">${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_hb">${obj[j].endTime}</p>
                    <span class="tys">${obj[j].info_ty}</span>
                </div>`;
                            }
                        }
                    }
                }
            }
        }
    }
}

//试用中
function syz() {
    let qb = document.getElementsByClassName("mfsyAll")[0];
    let xhr = new XMLHttpRequest() || new ActiveXObject();
    xhr.open("get", "http://1.15.132.9:3000/useing/master");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                qb.innerHTML = "";
                let obj = JSON.parse(xhr.responseText);
                for (let i = 0; i < 2; i++) {
                    for (let j = 2; j < 10; j++) {
                        let num = Math.round(Math.random() * 3);
                        if (num == 0) {
                            if (obj[j].info_ty == "首发") {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span>${obj[j].totalnum}</span><span>${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_jh">${obj[j].endTime}</p>
                    <span class="sf">${obj[j].info_ty}</span>
                </div>`;
                            } else {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span>${obj[j].totalnum}</span><span>${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_jh">${obj[j].endTime}</p>
                    <span class="tys">${obj[j].info_ty}</span>
                </div>`;
                            }
                        } else if (num == 1) {
                            if (obj[j].info_ty == "首发") {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span class="color_ls_pd">${obj[j].totalnum}</span><span class="color_ls_pd">${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_ls">${obj[j].endTime}</p>
                    <span class="sf">${obj[j].info_ty}</span>
                </div>`;
                            } else {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span class="color_ls_pd">${obj[j].totalnum}</span><span class="color_ls_pd">${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_ls">${obj[j].endTime}</p>
                    <span class="tys">${obj[j].info_ty}</span>
                </div>`;
                            }
                        } else {
                            if (obj[j].info_ty == "首发") {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span class="color_ls_hb">${obj[j].totalnum}</span><span class="color_ls_hb">${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_hb">${obj[j].endTime}</p>
                    <span class="sf">${obj[j].info_ty}</span>
                </div>`;
                            } else {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span class="color_ls_hb">${obj[j].totalnum}</span><span class="color_ls_hb">${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_hb">${obj[j].endTime}</p>
                    <span class="tys">${obj[j].info_ty}</span>
                </div>`;
                            }
                        }
                    }
                }
            }
        }
    }
}
//已结束
function yjs() {
    let qb = document.getElementsByClassName("mfsyAll")[0];
    let xhr = new XMLHttpRequest() || new ActiveXObject();
    xhr.open("get", "http://1.15.132.9:3000/useing/master");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                qb.innerHTML = "";
                let obj = JSON.parse(xhr.responseText);
                for (let i = 0; i < 2; i++) {
                    for (let j = 3; j < 11; j++) {
                        let num = Math.round(Math.random() * 3);
                        if (num == 0) {
                            if (obj[j].info_ty == "首发") {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span>${obj[j].totalnum}</span><span>${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_jh">${obj[j].endTime}</p>
                    <span class="sf">${obj[j].info_ty}</span>
                </div>`;
                            } else {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span>${obj[j].totalnum}</span><span>${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_jh">${obj[j].endTime}</p>
                    <span class="tys">${obj[j].info_ty}</span>
                </div>`;
                            }
                        } else if (num == 1) {
                            if (obj[j].info_ty == "首发") {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span class="color_ls_pd">${obj[j].totalnum}</span><span class="color_ls_pd">${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_ls">${obj[j].endTime}</p>
                    <span class="sf">${obj[j].info_ty}</span>
                </div>`;
                            } else {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span class="color_ls_pd">${obj[j].totalnum}</span><span class="color_ls_pd">${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_ls">${obj[j].endTime}</p>
                    <span class="tys">${obj[j].info_ty}</span>
                </div>`;
                            }
                        } else {
                            if (obj[j].info_ty == "首发") {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span class="color_ls_hb">${obj[j].totalnum}</span><span class="color_ls_hb">${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_hb">${obj[j].endTime}</p>
                    <span class="sf">${obj[j].info_ty}</span>
                </div>`;
                            } else {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span class="color_ls_hb">${obj[j].totalnum}</span><span class="color_ls_hb">${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_hb">${obj[j].endTime}</p>
                    <span class="tys">${obj[j].info_ty}</span>
                </div>`;
                            }
                        }
                    }
                }
            }
        }
    }
}

//体验师专享
function tyszx() {
    let qb = document.getElementsByClassName("mfsyAll")[0];
    let xhr = new XMLHttpRequest() || new ActiveXObject();
    xhr.open("get", "http://1.15.132.9:3000/useing/master");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                qb.innerHTML = "";
                let obj = JSON.parse(xhr.responseText);
                for (let i = 0; i < 2; i++) {
                    for (let j = 6; j < 14; j++) {
                        let num = Math.round(Math.random() * 3);
                        if (num == 0) {
                            qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span>${obj[j].totalnum}</span><span>${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_jh">${obj[j].endTime}</p>
                    <span class="tys">体验师专享</span>
                </div>`;
                        } else if (num == 1) {
                            qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span class="color_ls_pd">${obj[j].totalnum}</span><span class="color_ls_pd">${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_ls">${obj[j].endTime}</p>
                    <span class="tys">体验师专享</span>
                </div>`;
                        } else {
                            qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span class="color_ls_hb">${obj[j].totalnum}</span><span class="color_ls_hb">${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_hb">${obj[j].endTime}</p>
                    <span class="tys">体验师专享</span>
                </div>`;
                        }
                    }
                }
            }
        }
    }
}

//监听滚动条 自动添加数据
function zdtj() {
    let qb = document.getElementsByClassName("mfsyAll")[0];
    let xhr = new XMLHttpRequest() || new ActiveXObject();
    xhr.open("get", "http://1.15.132.9:3000/useing/public");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let obj = JSON.parse(xhr.responseText);
                for (let i = 0; i < 2; i++) {
                    for (let j = 0; j < 4; j++) {
                        let num = Math.round(Math.random() * 3);
                        if (num == 0) {
                            if (obj[j].info_ty == "首发") {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span>${obj[j].totalnum}</span><span>${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_jh">${obj[j].endTime}</p>
                    <span class="sf">${obj[j].info_ty}</span>
                </div>`;
                            } else {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span>${obj[j].totalnum}</span><span>${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_jh">${obj[j].endTime}</p>
                    <span class="tys">${obj[j].info_ty}</span>
                </div>`;
                            }
                        } else if (num == 1) {
                            if (obj[j].info_ty == "首发") {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span class="color_ls_pd">${obj[j].totalnum}</span><span class="color_ls_pd">${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_ls">${obj[j].endTime}</p>
                    <span class="sf">${obj[j].info_ty}</span>
                </div>`;
                            } else {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span class="color_ls_pd">${obj[j].totalnum}</span><span class="color_ls_pd">${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_ls">${obj[j].endTime}</p>
                    <span class="tys">${obj[j].info_ty}</span>
                </div>`;
                            }
                        } else {
                            if (obj[j].info_ty == "首发") {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span class="color_ls_hb">${obj[j].totalnum}</span><span class="color_ls_hb">${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_hb">${obj[j].endTime}</p>
                    <span class="sf">${obj[j].info_ty}</span>
                </div>`;
                            } else {
                                qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span class="color_ls_hb">${obj[j].totalnum}</span><span class="color_ls_hb">${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_hb">${obj[j].endTime}</p>
                    <span class="tys">${obj[j].info_ty}</span>
                </div>`;
                            }
                        }
                    }
                }
            }
        }
    }
}


//体验师专享  根据滚动条自动添加
function zdtys() {
    let qb = document.getElementsByClassName("mfsyAll")[0];
    let xhr = new XMLHttpRequest() || new ActiveXObject();
    xhr.open("get", "http://1.15.132.9:3000/useing/master");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let obj = JSON.parse(xhr.responseText);
                for (let i = 0; i < 2; i++) {
                    for (let j = 6; j < 10; j++) {
                        let num = Math.round(Math.random() * 3);
                        if (num == 0) {
                            qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span>${obj[j].totalnum}</span><span>${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_jh">${obj[j].endTime}</p>
                    <span class="tys">体验师专享</span>
                </div>`;
                        } else if (num == 1) {
                            qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span class="color_ls_pd">${obj[j].totalnum}</span><span class="color_ls_pd">${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_ls">${obj[j].endTime}</p>
                    <span class="tys">体验师专享</span>
                </div>`;
                        } else {
                            qb.innerHTML += `<div>
                    <img src="${obj[j].img}" alt="">
                    <h3>${obj[j].text}</h3>
                    <p><span class="color_ls_hb">${obj[j].totalnum}</span><span class="color_ls_hb">${obj[j].num}台</span></p>
                    <p><a>${obj[j].apply}</a>申请</p>
                    <p class="color_hb">${obj[j].endTime}</p>
                    <span class="tys">体验师专享</span>
                </div>`;
                        }
                    }
                }
            }
        }
    }
}