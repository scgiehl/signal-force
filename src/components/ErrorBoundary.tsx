import { Component, ReactNode } from 'react';

type Props = { children: ReactNode };
type State = { error: Error | null };

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: { componentStack?: string }) {
    if (import.meta.env.DEV) {
      console.error('[ErrorBoundary]', error, info);
    }
  }

  reset = () => {
    this.setState({ error: null });
  };

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;

    return (
      <div className="relative isolate min-h-[70vh] pt-32">
        <div className="container-x">
          <div className="panel relative overflow-hidden p-10 md:p-14">
            <div className="label text-warn-500">System · Render Fault</div>
            <h1 className="mt-4 h-display text-3xl md:text-4xl">
              Something broke loading this page.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-bone-300 md:text-lg">
              The previous page crashed mid-render. This is recoverable — reload the page or
              return home. If you keep seeing this on the same route, send the console error
              along; it will be in browser devtools.
            </p>

            {import.meta.env.DEV && (
              <pre className="mt-8 max-h-64 overflow-auto rounded-md border border-warn-500/30 bg-ink-900 p-4 font-mono text-xs leading-relaxed text-bone-200">
                {error.message}
                {error.stack ? `\n\n${error.stack}` : ''}
              </pre>
            )}

            <div className="mt-10 flex flex-wrap gap-3">
              <button type="button" onClick={() => window.location.reload()} className="btn-primary">
                Reload page
              </button>
              <button
                type="button"
                onClick={() => {
                  this.reset();
                  window.location.assign('/');
                }}
                className="btn-ghost"
              >
                Return home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
