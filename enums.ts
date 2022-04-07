const beforeLoad = 'beforeLoad';
const loading = 'loading';
const loaded = 'loaded';

const isLoading = (state: string) => state === loading;

console.log(isLoading("dog"));


enum LoadingState {
    beforeLoad = 'beforeLoad',
    loading = 'loading',
    loaded = 'loaded'
}

const isLoading1 = (state: LoadingState) => state === LoadingState.loading;

console.log(isLoading1(LoadingState.beforeLoad));

const englishLoadingStates = {
    [LoadingState.beforeLoad]: "Before Load"
}

function sendEvent1(name: 'checkout', data: { cartCount: number }): void;
function sendEvent1(name: 'abc', data: unknown): void {
    console.log(`${name} : ${JSON.stringify(data)}`)
}

sendEvent1('checkout', { cartCount: 1 })