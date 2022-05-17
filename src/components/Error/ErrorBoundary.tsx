import * as React from 'react';


class ErrorBoundary extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: any) {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true };
    }

    componentDidCatch(error:any, errorInfo:any) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        console.warn('triggers', error);
    }

    render() {
        return <>{this.props.children}</>
    }
}

export default ErrorBoundary;