import { TicketIcon, Clock, XCircleIcon, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export default function StatsSection({ tickets }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow transition-shadow">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 mb-0.5">Tickets ouverts</p>
                <p className="text-2xl font-semibold text-slate-800">
                  {tickets.length}
                </p>
                <p className="text-xs text-blue-600 mt-1.5">Nécessitent attention</p>
              </div>
              <div className="bg-blue-50 p-2.5 rounded-lg">
                <TicketIcon className="h-7 w-7 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow transition-shadow">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 mb-0.5">En cours</p>
                <p className="text-2xl font-semibold text-slate-800">6</p>
                <p className="text-xs text-orange-600 mt-1.5">En traitement</p>
              </div>
              <div className="bg-orange-50 p-2.5 rounded-lg">
                <Clock className="h-7 w-7 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow transition-shadow">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 mb-0.5">Résolus</p>
                <p className="text-2xl font-semibold text-slate-800">1</p>
                <p className="text-xs text-green-600 mt-1.5">25% taux résolution</p>
              </div>
              <div className="bg-green-50 p-2.5 rounded-lg">
                <CheckCircle2 className="h-7 w-7 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow transition-shadow">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 mb-0.5">Fermés</p>
                <p className="text-2xl font-semibold text-slate-800">5</p>
                <p className="text-xs text-red-600 mt-1.5">Tickets résolus et fermés</p>
              </div>
              <div className="bg-red-50 p-2.5 rounded-lg">
                <XCircleIcon className="h-7 w-7 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
