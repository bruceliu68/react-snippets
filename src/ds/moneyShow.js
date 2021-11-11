import { Money } from "@dsyd/com";

const { MoneyShow } = Money.set(1); // 甚至转化单位

<>
    无值：
    <MoneyShow value={'--'} />
    <br />
    小
    <MoneyShow value={10000} size="sm" />
    <br />
    中（默认）
    <MoneyShow value={10000} />
    <br />
    大
    <MoneyShow value={10000} size="lg" />
    <br />
    加粗
    <MoneyShow value={10000} size="lg" bold />
    <br />
    颜色（green,red,orange,primary,默认文本色）
    <MoneyShow value={10000} size="lg" color="green" />
    <MoneyShow value={10000} size="lg" color="red" />
    <MoneyShow value={10000} size="lg" color="orange" />
    <MoneyShow value={10000} size="lg" color="primary" />
    <br />
    横排：
    <MoneyShow value={10000} align="horizontal" precision={4} />
</>