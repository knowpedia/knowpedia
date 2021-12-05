
// 绘制括号

export let drawBracket = (painter, type, position, x, y, size) => {

    if (type == 'small') {

        if (position == 'left') {
            painter.beginPath().moveTo(x + 10, y).quadraticCurveTo(x, y + size * 0.5, x + 10, y + size).stroke();
        } else if (position = 'right') {
            painter.beginPath().moveTo(x, y).quadraticCurveTo(x + 10, y + size * 0.5, x, y + size).stroke();
        }

    } else if (type == 'middle') {

        if (position == 'left') {
            painter.beginPath().lineTo(x + 10, y).lineTo(x + 5, y).lineTo(x + 5, y + size).lineTo(x + 10, y + size).stroke();

        } else if (position = 'right') {
            painter.beginPath().lineTo(x, y).lineTo(x + 5, y).lineTo(x + 5, y + size).lineTo(x, y + size).stroke();

        }

    } else if (type == 'big') {

        if (position == 'left') {
            painter.beginPath().lineTo(x + 10, y).lineTo(x + 5, y + 3).lineTo(x + 5, y + size * 0.5 - 3).lineTo(x + 2, y + size * 0.5).lineTo(x + 5, y + size * 0.5 + 3).lineTo(x + 5, y + size - 3).lineTo(x + 10, y + size).stroke();
        } else if (position = 'right') {
            painter.beginPath().lineTo(x, y).lineTo(x + 5, y + 3).lineTo(x + 5, y + size * 0.5 - 3).lineTo(x + 7, y + size * 0.5).lineTo(x + 5, y + size * 0.5 + 3).lineTo(x + 5, y + size - 3).lineTo(x, y + size).stroke();
        }

    }

};
