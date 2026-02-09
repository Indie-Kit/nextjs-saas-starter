export default function StatsSection() {
  return (
    <section className="py-24 border-y">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          <div className="space-y-2">
            <h3 className="text-4xl font-bold">100%</h3>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">
              Type Safe
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold">50+</h3>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">
              UI Components
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold">10x</h3>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">
              Faster Dev
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold">Zero</h3>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">
              Vendor Lock-in
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
