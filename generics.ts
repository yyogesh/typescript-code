function simpleStringState<T>(initial: T): [() => T, (v: T) => void] {
    let val: T = initial;
    return [
        () => val,
        (v: T) => {
            val = v;
        }
    ]
}

const [str2Getter, str2Setting] = simpleStringState<string>('Hello');
console.log(str2Getter());
str2Setting('test');
console.log(str2Getter());

const [str3Getter, str4Setting] = simpleStringState<string | null>('Hello');
console.log(str3Getter());
str4Setting('test');
console.log(str3Getter());

interface Rank<RankItem> {
    item: RankItem;
    rank: number;
}

function ranker<RankItem>(items: RankItem[], rank: (v: RankItem) => number): RankItem[] {
    const ranks: Rank<RankItem>[] = items.map(item => ({
        item,
        rank: rank(item)
    }));
    ranks.sort((a, b) => a.rank - b.rank);

    return ranks.map((rank) => rank.item);
}

interface Color<ColorItem> {
    item: ColorItem;
    colorIndex: number;
}

function getColorByRank<ColorItem>(items: ColorItem[], colorRank: (v: ColorItem) => number): ColorItem[] {

    const colors: Color<ColorItem>[] = items.map(item => ({
        item,
        colorIndex: colorRank(item)
    }));

    colors.sort((a, b) => a.colorIndex - b.colorIndex);

    return colors.map(color => color.item);
}

interface TriColor {
    name: string,
    index: number
}


const colors: TriColor[] = [
    {
        name: 'Red',
        index: 4
    },
    {
        name: 'Green',
        index: 2
    }
]

console.log(getColorByRank(colors, ({ index }) => index));


