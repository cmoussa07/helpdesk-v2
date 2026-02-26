import { TicketIcon, Clock, XCircleIcon, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export default function StatsSection({ tickets }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-2 border-blue-100 hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Tickets ouverts</p>
                <p className="text-3xl font-bold text-gray-900">
                  {tickets.length}
                </p>
                <p className="text-xs text-blue-600 mt-2">
                  Nécessitent attention
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <TicketIcon className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-orange-100 hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">En cours</p>
                <p className="text-3xl font-bold text-gray-900">6</p>
                <p className="text-xs text-orange-600 mt-2">En traitement</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-100 hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Résolus</p>
                <p className="text-3xl font-bold text-gray-900">1</p>
                <p className="text-xs text-green-600 mt-2">
                  {/* {stats.total > 0
                    ? Math.round((stats.resolved / stats.total) * 100)
                    : 0} */}
                  25% taux résolution
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-red-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Fermés</p>
                <p className="mt-2 text-2xl font-bold text-gray-600">5</p>
              </div>
              <div>
                <XCircleIcon className="h-8 w-8 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
