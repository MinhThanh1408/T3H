// Viết hàm sử dụng regex biến đổi url theo định dạng mong muốn. Hàm này có mục tiêu làm thay đổi kích thước ảnh theo các tỷ lệ đã được định nghĩa trước:
//  Lưu ý: Một số đặc điểm của kích thước
//  1. Các định dạng: _100x, _x100, _100x100
//  2. Nằm liền kề dấu chấm của phần mở rộng: url_100x.jpg

let tests = [
  {
    input: 'https://cdn.shopify.com/e.jpg?v=15',
    size: '100x',
    output: 'https://cdn.shopify.com/e_100x.jpg?v=15',
    // Pass
  },
  {
    input: 'https://cdn.shopify.com/e_100x200.jpg?v=15',
    size: 'x200',
    output: 'https://cdn.shopify.com/e_x200.jpg?v=15',
    //Pass
  },
  {
    input: 'https://cdn.shopify.com/e-jpg_200x100.jpg?v=15',
    size: '100x',
    output: 'https://cdn.shopify.com/e-jpg_100x.jpg?v=15',
    //Pass
  },
  {
    input:
      'https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_100x.jpg?v=15',
    size: 'x100',
    output:
      'https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_100x.jpg?v=15',
    //?
  },
  {
    input: 'https://cdn.shopify.com/e-800x600-jpg.jpg?v=15',
    size: '100x200',
    output: 'https://cdn.shopify.com/e-800x600-jpg_100x200.jpg?v=15',
  },
];

function convertUrl(url, size) {
  const REGEX0 =  /e\.jpg/gm;
  const REGEX1 = /\/e\_(\w+)\.jpg/gm; 
  const REGEX2 = /e\-jpg_+(\d+\w+)+.jpg/gm;
  const REGEX3 = /jpg\.jpg\?v=15$/gm;


  if(REGEX0.test(url)){
    return url.replace(REGEX0, `e_${size}.jpg`);
  }else if (REGEX1.test(url)) {
    return url.replace(REGEX1, `/e_${size}.jpg`);
  } else if (REGEX2.test(url)) {
    return url.replace(REGEX2, `e-jpg_${size}.jpg`);
  } else if (REGEX3.test(url)) {
    return url.replace(REGEX3, `jpg_${size}.jpg?v=15`);
  }
  return url;
}
tests.forEach((element) => {
  if (convertUrl(element.input, element.size) === element.output) {
    console.log(true);
  } else {
    console.log(false);
    console.log(element.input);
    console.log(element.output);
    console.log(convertUrl(element.input, element.size));
  }
});
