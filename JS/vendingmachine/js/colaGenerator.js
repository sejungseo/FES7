class ColaGenerator { // class 쓸 때 첫글자 => 항상 대문자
  
  constructor() {
    this.itemList = document.querySelector('.cola-list');
  }
  // 콜라 객체를 초기화합니다.
  async setup() {
    const response = await this.loadData();
    this.colaFactory(response);
  }

  // 콜라 관련 데이터를 로드합니다.
  async loadData() {

    try{
      const response = await fetch('./items.json');

      if(!response.ok) {
        throw new Error('HTTP ERROR!! :' + response.status);
      }
      return await response.json();
    } catch(error) {
        console.error('콜라데이터를 로딩하는 중에 문제가 발생했습니다. :' + error);
    }
  }

  // <li>
  //         <!-- JS : 클래스 on 유/무 제어 -->
  //         <button type="button" class="btn-cola on">
  //           <img src="./img/cola-original.png" alt="" />
  //           <span class="cola-name">Original_Cola</span>
  //           <strong class="cola-price">1000원</strong>
  //         </button>
  //       </li>

  // 콜라의 템플릿 코드입니다.
  colaFactory(data) {
    const docFrag = new DocumentFragment();
    data.forEach((el) => {
      const item = document.createElement('li');
      const itemTemplate = `
      <button type="button" class="btn-cola" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
        <img src="./img/${el.img}" alt="${el.name}" />
        <span class="cola-name">${el.name}</span>
        <strong class="cola-price">${el.cost}원</strong>
      </button>
      `; // 버튼 요소에 data 저장만 한 거고 추후에 불러오기 할 것
      item.innerHTML = itemTemplate;
      // this.itemList.append(item); // 노추천 -> 대신 아래 코드 사용하기
      docFrag.append(item);
    });

    this.itemList.append(docFrag);
  }
}

export default ColaGenerator // 하나만 밖으로 빼줄거야 그 이름은 ColaGenerator