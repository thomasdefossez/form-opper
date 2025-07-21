"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Settings,
  Database,
  Network,
  ShoppingCart,
  CreditCard,
  FileText,
  CheckCircle,
  Phone,
  Package,
  Save,
  Sparkles,
  Mail,
  AlertCircle,
} from "lucide-react"

interface QualificationData {
  // Connaissance contexte Éditeur - Référentiel
  nbTitres: string
  typeTitreNumero: boolean
  typeTitreDateADate: boolean
  frequenceTitres: string
  nbAbonnesParTitre: string
  nbOffresActivesParTitre: string
  couplageTitres: string

  // Paiement
  cbAchat: boolean
  prelevementCB: boolean
  prelevementSEPA: boolean
  dureeLibre: boolean
  paiementFractionne: boolean
  pspActuel: string
  horsPrixTutar: boolean
  politiqueRejetPrelevements: string
  cheques: boolean

  // Mode de fonctionnement
  portage: boolean
  vpc: boolean
  gestionFraisPort: boolean
  gestionAdministration: boolean
  gestionGratuits: boolean
  gestionNPAI: boolean
  gestionRemises: boolean
  offresExemplaires: boolean
  suspensionsTemporaires: boolean
  suspensionsDefinitives: boolean
  gestionRelances: boolean
  gestionPrimes: boolean
  gestionGraciesCopies: boolean
  gestionParrainage: boolean
  abonnementsConsommation: boolean
  transmissionFichiers: boolean
  gestionEditions: boolean

  // Solution logicielle actuelle
  systemeActuel: string
  souhaitGarderNumeroClients: boolean
  optInOptOut: string
  nbAdressesTotal: string
  nbAbonnementsTotal: string
  historiquesSouhaites: boolean
  repriseHelpDesk: boolean
  qualifiantsMarketing: boolean

  // Urbanisation SI
  applicationsConnexion: string
  logicielReporting: string
  baseClientCentralisee: string
  ldapCrm: string
  systemeFacturation: string
  systemeComptabilite: string
  systemeGestionStocks: string
  emailing: string
  donneesRequierement: string
  listeClients: string
  listeControles: string
  statistiques: string
  exportDivers: string
  connecteursWebService: boolean

  // Boutique
  boutiquesEditeur: string
  nbBoutiquesActuelles: string
  espaceClientEnLigne: boolean
  moyenPaiementBoutiques: string
  numeriques: string

  // Réponses
  reponseEditeur1: string
  reponseEditeur2: string
  reponseEditeur3: string
  reponseEditeur4: string
  reponseEditeur5: string

  // Gestion Relation Client - Appels entrants
  nombreAppelsParAn: string
  motifAppels: string
  changementsAdresseAppels: string
  nonReceptionPortageAppels: string
  nonReceptionPosteAppels: string
  retardAbonnementAppels: string
  problemeAccesNumeriqueAppels: string
  diversAppels: string

  // Mails entrants
  nombreMailsParAn: string
  motifMails: string
  changementsAdresseMails: string
  nonReceptionPortageMails: string
  nonReceptionPosteMails: string
  retardAbonnementMails: string
  problemeAccesNumeriqueMails: string
  diversMails: string

  // Courriers entrants
  nombreCourriersParAn: string
  motifCourriers: string
  changementsAdresseCourriers: string
  nonReceptionPortageCourriers: string
  nonReceptionPosteCourriers: string
  retardAbonnementCourriers: string
  problemeAccesNumeriqueCourriers: string
  diversCourriers: string

  // Gestion des Abonnements - Caractéristiques générales
  nbNumeroParAn: string
  nbAbonnesPapierActifs: string
  nbAbonnesPortes: string
  nbAbonnesNumeriques: string
  nbAbonnesCouplesPapier: string
  nbAbonnesInactifsProspects: string
  presenceHorsSerie: boolean

  // Relances de réabonnement
  relancesParPoste: boolean
  relancesAvecJournal: boolean
  relancesParEmail: boolean
  relancesParSMS: boolean
  typeRelancesPapier: string

  // Fulfillment
  nbCreationsBulletinPapier: string
  nbReabonnementBulletinPapier: string
  nbAbonnesPrelevementSEPA: string
  frequencePrelevements: string
  nbCartesBancaires: string
  nbChequesEncaisses: string
  frequenceRemiseCheques: string
  nbAbonnementsLigne: string
  nbCommandesVPC: string
  nbCommandesPapier: string
  bulletinsQualifications: string

  // Divers
  editionsMultiples: boolean
  abonnementsElectroniquesCouples: boolean
  abonnementsElectroniquesNonCouples: boolean
  portage: string
  frequenceTirages: string
}

export default function ClientQualificationForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState<QualificationData>({
    // Initialize all fields
    nbTitres: "",
    typeTitreNumero: false,
    typeTitreDateADate: false,
    frequenceTitres: "",
    nbAbonnesParTitre: "",
    nbOffresActivesParTitre: "",
    couplageTitres: "",
    cbAchat: false,
    prelevementCB: false,
    prelevementSEPA: false,
    dureeLibre: false,
    paiementFractionne: false,
    pspActuel: "",
    horsPrixTutar: false,
    politiqueRejetPrelevements: "",
    cheques: false,
    portage: false,
    vpc: false,
    gestionFraisPort: false,
    gestionAdministration: false,
    gestionGratuits: false,
    gestionNPAI: false,
    gestionRemises: false,
    offresExemplaires: false,
    suspensionsTemporaires: false,
    suspensionsDefinitives: false,
    gestionRelances: false,
    gestionPrimes: false,
    gestionGraciesCopies: false,
    gestionParrainage: false,
    abonnementsConsommation: false,
    transmissionFichiers: false,
    gestionEditions: false,
    systemeActuel: "",
    souhaitGarderNumeroClients: false,
    optInOptOut: "",
    nbAdressesTotal: "",
    nbAbonnementsTotal: "",
    historiquesSouhaites: false,
    repriseHelpDesk: false,
    qualifiantsMarketing: false,
    applicationsConnexion: "",
    logicielReporting: "",
    baseClientCentralisee: "",
    ldapCrm: "",
    systemeFacturation: "",
    systemeComptabilite: "",
    systemeGestionStocks: "",
    emailing: "",
    donneesRequierement: "",
    listeClients: "",
    listeControles: "",
    statistiques: "",
    exportDivers: "",
    connecteursWebService: false,
    boutiquesEditeur: "",
    nbBoutiquesActuelles: "",
    espaceClientEnLigne: false,
    moyenPaiementBoutiques: "",
    numeriques: "",
    reponseEditeur1: "",
    reponseEditeur2: "",
    reponseEditeur3: "",
    reponseEditeur4: "",
    reponseEditeur5: "",
    nombreAppelsParAn: "",
    motifAppels: "",
    changementsAdresseAppels: "",
    nonReceptionPortageAppels: "",
    nonReceptionPosteAppels: "",
    retardAbonnementAppels: "",
    problemeAccesNumeriqueAppels: "",
    diversAppels: "",
    nombreMailsParAn: "",
    motifMails: "",
    changementsAdresseMails: "",
    nonReceptionPortageMails: "",
    nonReceptionPosteMails: "",
    retardAbonnementMails: "",
    problemeAccesNumeriqueMails: "",
    diversMails: "",
    nombreCourriersParAn: "",
    motifCourriers: "",
    changementsAdresseCourriers: "",
    nonReceptionPortageCourriers: "",
    nonReceptionPosteCourriers: "",
    retardAbonnementCourriers: "",
    problemeAccesNumeriqueCourriers: "",
    diversCourriers: "",
    nbNumeroParAn: "",
    nbAbonnesPapierActifs: "",
    nbAbonnesPortes: "",
    nbAbonnesNumeriques: "",
    nbAbonnesCouplesPapier: "",
    nbAbonnesInactifsProspects: "",
    presenceHorsSerie: false,
    relancesParPoste: false,
    relancesAvecJournal: false,
    relancesParEmail: false,
    relancesParSMS: false,
    typeRelancesPapier: "",
    nbCreationsBulletinPapier: "",
    nbReabonnementBulletinPapier: "",
    nbAbonnesPrelevementSEPA: "",
    frequencePrelevements: "",
    nbCartesBancaires: "",
    nbChequesEncaisses: "",
    frequenceRemiseCheques: "",
    nbAbonnementsLigne: "",
    nbCommandesVPC: "",
    nbCommandesPapier: "",
    bulletinsQualifications: "",
    editionsMultiples: false,
    abonnementsElectroniquesCouples: false,
    abonnementsElectroniquesNonCouples: false,
    portage: "",
    frequenceTirages: "",
  })

  const [showSummary, setShowSummary] = useState(false)
  const [isAutoSaving, setIsAutoSaving] = useState(false)
  const [validationErrors, setValidationErrors] = useState<string[]>([])

  const handleInputChange = (field: keyof QualificationData, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  // Auto-save functionality
  useEffect(() => {
    const autoSave = setTimeout(() => {
      if (Object.values(formData).some((value) => value !== "" && value !== false)) {
        setIsAutoSaving(true)
        // Simulate saving to localStorage or API
        localStorage.setItem("clientQualificationData", JSON.stringify(formData))
        setTimeout(() => {
          setIsAutoSaving(false)
          toast({
            title: "✨ Données sauvegardées",
            description: "Vos informations ont été automatiquement sauvegardées.",
            duration: 2000,
          })
        }, 500)
      }
    }, 2000)

    return () => clearTimeout(autoSave)
  }, [formData, toast])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required fields
    const errors: string[] = []
    if (!formData.nbTitres.trim()) errors.push("Nombre de titres")
    if (!formData.frequenceTitres.trim() && formData.typeTitreNumero) errors.push("Fréquence des titres")
    if (!formData.nbAbonnesParTitre.trim()) errors.push("Nombre d'abonnés par titre")

    if (errors.length > 0) {
      setValidationErrors(errors)
      toast({
        title: "⚠️ Champs obligatoires manquants",
        description: `Veuillez remplir: ${errors.join(", ")}`,
        duration: 4000,
      })
      return
    }

    setValidationErrors([])
    setShowSummary(true)
    toast({
      title: "🎉 Synthèse générée avec succès",
      description: "Votre qualification client est maintenant prête à être consultée.",
      duration: 3000,
    })
  }

  const handleSaveManually = () => {
    localStorage.setItem("clientQualificationData", JSON.stringify(formData))
    toast({
      title: "💾 Sauvegarde manuelle effectuée",
      description: "Toutes vos données ont été sauvegardées avec succès.",
      duration: 2000,
    })
  }

  const resetForm = () => {
    setFormData({
      nbTitres: "",
      typeTitreNumero: false,
      typeTitreDateADate: false,
      frequenceTitres: "",
      nbAbonnesParTitre: "",
      nbOffresActivesParTitre: "",
      couplageTitres: "",
      cbAchat: false,
      prelevementCB: false,
      prelevementSEPA: false,
      dureeLibre: false,
      paiementFractionne: false,
      pspActuel: "",
      horsPrixTutar: false,
      politiqueRejetPrelevements: "",
      cheques: false,
      portage: false,
      vpc: false,
      gestionFraisPort: false,
      gestionAdministration: false,
      gestionGratuits: false,
      gestionNPAI: false,
      gestionRemises: false,
      offresExemplaires: false,
      suspensionsTemporaires: false,
      suspensionsDefinitives: false,
      gestionRelances: false,
      gestionPrimes: false,
      gestionGraciesCopies: false,
      gestionParrainage: false,
      abonnementsConsommation: false,
      transmissionFichiers: false,
      gestionEditions: false,
      systemeActuel: "",
      souhaitGarderNumeroClients: false,
      optInOptOut: "",
      nbAdressesTotal: "",
      nbAbonnementsTotal: "",
      historiquesSouhaites: false,
      repriseHelpDesk: false,
      qualifiantsMarketing: false,
      applicationsConnexion: "",
      logicielReporting: "",
      baseClientCentralisee: "",
      ldapCrm: "",
      systemeFacturation: "",
      systemeComptabilite: "",
      systemeGestionStocks: "",
      emailing: "",
      donneesRequierement: "",
      listeClients: "",
      listeControles: "",
      statistiques: "",
      exportDivers: "",
      connecteursWebService: false,
      boutiquesEditeur: "",
      nbBoutiquesActuelles: "",
      espaceClientEnLigne: false,
      moyenPaiementBoutiques: "",
      numeriques: "",
      reponseEditeur1: "",
      reponseEditeur2: "",
      reponseEditeur3: "",
      reponseEditeur4: "",
      reponseEditeur5: "",
      nombreAppelsParAn: "",
      motifAppels: "",
      changementsAdresseAppels: "",
      nonReceptionPortageAppels: "",
      nonReceptionPosteAppels: "",
      retardAbonnementAppels: "",
      problemeAccesNumeriqueAppels: "",
      diversAppels: "",
      nombreMailsParAn: "",
      motifMails: "",
      changementsAdresseMails: "",
      nonReceptionPortageMails: "",
      nonReceptionPosteMails: "",
      retardAbonnementMails: "",
      problemeAccesNumeriqueMails: "",
      diversMails: "",
      nombreCourriersParAn: "",
      motifCourriers: "",
      changementsAdresseCourriers: "",
      nonReceptionPortageCourriers: "",
      nonReceptionPosteCourriers: "",
      retardAbonnementCourriers: "",
      problemeAccesNumeriqueCourriers: "",
      diversCourriers: "",
      nbNumeroParAn: "",
      nbAbonnesPapierActifs: "",
      nbAbonnesPortes: "",
      nbAbonnesNumeriques: "",
      nbAbonnesCouplesPapier: "",
      nbAbonnesInactifsProspects: "",
      presenceHorsSerie: false,
      relancesParPoste: false,
      relancesAvecJournal: false,
      relancesParEmail: false,
      relancesParSMS: false,
      typeRelancesPapier: "",
      nbCreationsBulletinPapier: "",
      nbReabonnementBulletinPapier: "",
      nbAbonnesPrelevementSEPA: "",
      frequencePrelevements: "",
      nbCartesBancaires: "",
      nbChequesEncaisses: "",
      frequenceRemiseCheques: "",
      nbAbonnementsLigne: "",
      nbCommandesVPC: "",
      nbCommandesPapier: "",
      bulletinsQualifications: "",
      editionsMultiples: false,
      abonnementsElectroniquesCouples: false,
      abonnementsElectroniquesNonCouples: false,
      portage: "",
      frequenceTirages: "",
    })
    setShowSummary(false)
    localStorage.removeItem("clientQualificationData")
    toast({
      title: "🔄 Formulaire réinitialisé",
      description: "Toutes les données ont été effacées avec succès.",
      duration: 2000,
    })
  }

  if (showSummary) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-indigo-50 p-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-800 via-purple-700 to-indigo-800 bg-clip-text text-transparent">
                Synthèse de Qualification Client
              </h1>
              <p className="text-lg text-gray-600">Analyse complète des besoins et spécifications</p>
            </div>
            <Button
              onClick={resetForm}
              variant="outline"
              className="border-violet-200 text-violet-700 hover:bg-violet-50 shadow-lg bg-white/80 backdrop-blur-sm"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Nouveau Client
            </Button>
          </div>

          <div className="grid gap-8">
            {/* Summary cards with violet styling */}
            <Card className="border-0 shadow-xl bg-gradient-to-r from-violet-900 via-purple-900 to-indigo-900 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <FileText className="h-6 w-6" />
                  Référentiel
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-violet-200 text-sm font-medium">Nombre de titres</Label>
                  <p className="text-xl font-semibold">{formData.nbTitres || "Non spécifié"}</p>
                </div>
                <div className="space-y-2">
                  <Label className="text-violet-200 text-sm font-medium">Type de titre</Label>
                  <div className="flex gap-2">
                    {formData.typeTitreNumero && (
                      <Badge variant="secondary" className="bg-violet-700 text-white">
                        Numéro
                      </Badge>
                    )}
                    {formData.typeTitreDateADate && (
                      <Badge variant="secondary" className="bg-violet-700 text-white">
                        Date à date
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-violet-200 text-sm font-medium">Fréquence des titres</Label>
                  <p className="text-lg">{formData.frequenceTitres || "Non spécifié"}</p>
                </div>
                <div className="space-y-2">
                  <Label className="text-violet-200 text-sm font-medium">Nb d'abonnés par titre</Label>
                  <p className="text-lg">{formData.nbAbonnesParTitre || "Non spécifié"}</p>
                </div>
              </CardContent>
            </Card>

            {/* Additional summary cards with different violet gradients */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-violet-800 to-purple-900 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5" />
                    Paiement
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-violet-200 text-sm font-medium">Modes de paiement acceptés</Label>
                    <div className="flex flex-wrap gap-2">
                      {formData.cbAchat && (
                        <Badge variant="secondary" className="bg-violet-700 text-white">
                          CB à l'acte
                        </Badge>
                      )}
                      {formData.prelevementCB && (
                        <Badge variant="secondary" className="bg-violet-700 text-white">
                          Prélèvement CB
                        </Badge>
                      )}
                      {formData.prelevementSEPA && (
                        <Badge variant="secondary" className="bg-violet-700 text-white">
                          Prélèvement SEPA
                        </Badge>
                      )}
                      {formData.cheques && (
                        <Badge variant="secondary" className="bg-violet-700 text-white">
                          Chèques
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-violet-200 text-sm font-medium">PSP Actuel</Label>
                    <p className="text-lg">{formData.pspActuel || "Non spécifié"}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-indigo-800 to-violet-900 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    Relation Client
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-indigo-200 text-sm font-medium">Nombre d'appels par an</Label>
                    <p className="text-lg">{formData.nombreAppelsParAn || "Non spécifié"}</p>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-indigo-200 text-sm font-medium">Nombre de mails par an</Label>
                    <p className="text-lg">{formData.nombreMailsParAn || "Non spécifié"}</p>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-indigo-200 text-sm font-medium">Nombre de courriers par an</Label>
                    <p className="text-lg">{formData.nombreCourriersParAn || "Non spécifié"}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-indigo-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header with Logo */}
        <div className="mb-8 text-center space-y-6">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src="/logo-opper.png" alt="Opper Logo" className="h-16 w-auto" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-100 to-indigo-100 rounded-full border border-violet-200">
            <Sparkles className="h-4 w-4 text-violet-600" />
            <span className="text-sm font-medium text-violet-700">Qualification Client Premium</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-800 via-purple-700 to-indigo-800 bg-clip-text text-transparent">
            Formulaire de Qualification Client
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Collectez et analysez les informations détaillées pour la qualification des éditeurs et solutions
            logicielles
          </p>

          {/* Required fields notice */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg">
            <AlertCircle className="h-4 w-4 text-red-500" />
            <span className="text-sm text-red-700">
              <span className="text-red-500">*</span> Champs obligatoires
            </span>
          </div>
        </div>

        <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8">
            {/* Auto-save indicator */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                {isAutoSaving ? (
                  <div className="flex items-center gap-2 text-violet-600">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-violet-600 border-t-transparent"></div>
                    <span className="text-sm">Sauvegarde en cours...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Sauvegarde automatique activée</span>
                  </div>
                )}
              </div>
              <Button
                onClick={handleSaveManually}
                variant="outline"
                size="sm"
                className="border-violet-200 text-violet-700 hover:bg-violet-50 bg-white/80"
              >
                <Save className="mr-2 h-4 w-4" />
                Sauvegarder
              </Button>
            </div>

            <form onSubmit={handleSubmit}>
              <Tabs defaultValue="donnees-editeur" className="space-y-8">
                <TabsList className="grid w-full grid-cols-3 bg-gradient-to-r from-violet-100 to-indigo-100 p-1 rounded-xl border border-violet-200">
                  <TabsTrigger
                    value="donnees-editeur"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg font-medium transition-all duration-200"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Données éditeur
                  </TabsTrigger>
                  <TabsTrigger
                    value="fulfillment"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg font-medium transition-all duration-200"
                  >
                    <Package className="mr-2 h-4 w-4" />
                    Fulfillment
                  </TabsTrigger>
                  <TabsTrigger
                    value="relation-client"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg font-medium transition-all duration-200"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Relation client
                  </TabsTrigger>
                </TabsList>

                {/* Données éditeur Tab */}
                <TabsContent value="donnees-editeur" className="space-y-8">
                  <Tabs defaultValue="referentiel" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-6 bg-gray-50 p-1 rounded-lg border border-gray-200">
                      <TabsTrigger
                        value="referentiel"
                        className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md text-sm font-medium"
                      >
                        Référentiel
                      </TabsTrigger>
                      <TabsTrigger
                        value="paiement"
                        className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md text-sm font-medium"
                      >
                        Paiement
                      </TabsTrigger>
                      <TabsTrigger
                        value="fonctionnement"
                        className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md text-sm font-medium"
                      >
                        Fonctionnement
                      </TabsTrigger>
                      <TabsTrigger
                        value="solution"
                        className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md text-sm font-medium"
                      >
                        Solution
                      </TabsTrigger>
                      <TabsTrigger
                        value="urbanisation"
                        className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md text-sm font-medium"
                      >
                        Urbanisation
                      </TabsTrigger>
                      <TabsTrigger
                        value="boutique"
                        className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md text-sm font-medium"
                      >
                        Boutique
                      </TabsTrigger>
                    </TabsList>

                    {/* Référentiel Tab */}
                    <TabsContent value="referentiel" className="space-y-6">
                      <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-violet-50/50">
                        <CardHeader className="pb-6">
                          <CardTitle className="flex items-center gap-3 text-xl text-violet-800">
                            <FileText className="h-5 w-5" />
                            Connaissance contexte Éditeur - Référentiel
                          </CardTitle>
                          <CardDescription className="text-gray-600">
                            Informations sur les publications et leur structure
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-3">
                              <Label
                                htmlFor="nbTitres"
                                className="text-sm font-medium text-gray-700 flex items-center gap-1"
                              >
                                Nb de titres
                                <span className="text-red-500">*</span>
                              </Label>
                              <Input
                                id="nbTitres"
                                value={formData.nbTitres}
                                onChange={(e) => handleInputChange("nbTitres", e.target.value)}
                                className={`border-violet-200 focus:border-violet-400 focus:ring-violet-400 rounded-lg transition-colors ${
                                  validationErrors.includes("Nombre de titres") ? "border-red-300 bg-red-50" : ""
                                }`}
                                placeholder="Entrez le nombre de titres"
                                required
                              />
                              {validationErrors.includes("Nombre de titres") && (
                                <p className="text-sm text-red-600 flex items-center gap-1">
                                  <AlertCircle className="h-3 w-3" />
                                  Ce champ est obligatoire
                                </p>
                              )}
                            </div>

                            <div className="space-y-3">
                              <Label className="text-sm font-medium text-gray-700">Type de titre</Label>
                              <div className="space-y-3">
                                <div className="flex items-center space-x-3 p-3 rounded-lg border border-violet-200 hover:bg-violet-50 transition-colors">
                                  <Checkbox
                                    id="typeTitreNumero"
                                    checked={formData.typeTitreNumero}
                                    onCheckedChange={(checked) =>
                                      handleInputChange("typeTitreNumero", checked as boolean)
                                    }
                                    className="border-violet-300 data-[state=checked]:bg-violet-600"
                                  />
                                  <Label htmlFor="typeTitreNumero" className="text-sm font-medium cursor-pointer">
                                    Numéro
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-3 p-3 rounded-lg border border-violet-200 hover:bg-violet-50 transition-colors">
                                  <Checkbox
                                    id="typeTitreDateADate"
                                    checked={formData.typeTitreDateADate}
                                    onCheckedChange={(checked) =>
                                      handleInputChange("typeTitreDateADate", checked as boolean)
                                    }
                                    className="border-violet-300 data-[state=checked]:bg-violet-600"
                                  />
                                  <Label htmlFor="typeTitreDateADate" className="text-sm font-medium cursor-pointer">
                                    Date à date
                                  </Label>
                                </div>
                              </div>
                            </div>

                            {formData.typeTitreNumero && (
                              <div className="space-y-3">
                                <Label
                                  htmlFor="frequenceTitres"
                                  className="text-sm font-medium text-gray-700 flex items-center gap-1"
                                >
                                  Fréquence des titres
                                  <span className="text-red-500">*</span>
                                </Label>
                                <Select
                                  onValueChange={(value) => handleInputChange("frequenceTitres", value)}
                                  value={formData.frequenceTitres}
                                >
                                  <SelectTrigger
                                    className={`border-violet-200 focus:border-violet-400 rounded-lg transition-colors ${
                                      validationErrors.includes("Fréquence des titres")
                                        ? "border-red-300 bg-red-50"
                                        : ""
                                    }`}
                                  >
                                    <SelectValue placeholder="Sélectionnez la fréquence" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="quotidien">Quotidien</SelectItem>
                                    <SelectItem value="hebdomadaire">Hebdomadaire</SelectItem>
                                    <SelectItem value="mensuel">Mensuel</SelectItem>
                                    <SelectItem value="trimestriel">Trimestriel</SelectItem>
                                    <SelectItem value="multi-frequence">Multi fréquence</SelectItem>
                                  </SelectContent>
                                </Select>
                                {validationErrors.includes("Fréquence des titres") && (
                                  <p className="text-sm text-red-600 flex items-center gap-1">
                                    <AlertCircle className="h-3 w-3" />
                                    Ce champ est obligatoire
                                  </p>
                                )}
                              </div>
                            )}

                            <div className="space-y-3">
                              <Label
                                htmlFor="nbAbonnesParTitre"
                                className="text-sm font-medium text-gray-700 flex items-center gap-1"
                              >
                                Nb d'abonnés par titre
                                <span className="text-red-500">*</span>
                              </Label>
                              <Input
                                id="nbAbonnesParTitre"
                                value={formData.nbAbonnesParTitre}
                                onChange={(e) => handleInputChange("nbAbonnesParTitre", e.target.value)}
                                className={`border-violet-200 focus:border-violet-400 focus:ring-violet-400 rounded-lg transition-colors ${
                                  validationErrors.includes("Nombre d'abonnés par titre")
                                    ? "border-red-300 bg-red-50"
                                    : ""
                                }`}
                                placeholder="Nombre d'abonnés"
                                required
                              />
                              {validationErrors.includes("Nombre d'abonnés par titre") && (
                                <p className="text-sm text-red-600 flex items-center gap-1">
                                  <AlertCircle className="h-3 w-3" />
                                  Ce champ est obligatoire
                                </p>
                              )}
                            </div>

                            <div className="space-y-3">
                              <Label htmlFor="nbOffresActivesParTitre" className="text-sm font-medium text-gray-700">
                                Nb offres actives par titre
                              </Label>
                              <Input
                                id="nbOffresActivesParTitre"
                                value={formData.nbOffresActivesParTitre}
                                onChange={(e) => handleInputChange("nbOffresActivesParTitre", e.target.value)}
                                className="border-violet-200 focus:border-violet-400 focus:ring-violet-400 rounded-lg transition-colors"
                                placeholder="Nombre d'offres actives"
                              />
                            </div>

                            <div className="space-y-3">
                              <Label htmlFor="couplageTitres" className="text-sm font-medium text-gray-700">
                                Couplage entre titres
                              </Label>
                              <Input
                                id="couplageTitres"
                                value={formData.couplageTitres}
                                onChange={(e) => handleInputChange("couplageTitres", e.target.value)}
                                className="border-violet-200 focus:border-violet-400 focus:ring-violet-400 rounded-lg transition-colors"
                                placeholder="Décrivez les couplages"
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* Paiement Tab */}
                    <TabsContent value="paiement" className="space-y-6">
                      <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-violet-50/50">
                        <CardHeader className="pb-6">
                          <CardTitle className="flex items-center gap-3 text-xl text-violet-800">
                            <CreditCard className="h-5 w-5" />
                            Paiement
                          </CardTitle>
                          <CardDescription className="text-gray-600">
                            Modes de paiement et politiques financières
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8">
                          <div className="space-y-6">
                            <div>
                              <Label className="text-base font-semibold text-gray-800 mb-4 block">
                                Modes de paiement acceptés
                              </Label>
                              <div className="grid gap-4 md:grid-cols-2">
                                <div className="flex items-center space-x-3 p-3 rounded-lg border border-violet-200 hover:bg-violet-50 transition-colors">
                                  <Checkbox
                                    id="cbAchat"
                                    checked={formData.cbAchat}
                                    onCheckedChange={(checked) => handleInputChange("cbAchat", checked as boolean)}
                                    className="border-violet-300 data-[state=checked]:bg-violet-600"
                                  />
                                  <Label htmlFor="cbAchat" className="text-sm font-medium cursor-pointer">
                                    CB à l'acte
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-3 p-3 rounded-lg border border-violet-200 hover:bg-violet-50 transition-colors">
                                  <Checkbox
                                    id="prelevementCB"
                                    checked={formData.prelevementCB}
                                    onCheckedChange={(checked) =>
                                      handleInputChange("prelevementCB", checked as boolean)
                                    }
                                    className="border-violet-300 data-[state=checked]:bg-violet-600"
                                  />
                                  <Label htmlFor="prelevementCB" className="text-sm font-medium cursor-pointer">
                                    Prélèvement CB
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-3 p-3 rounded-lg border border-violet-200 hover:bg-violet-50 transition-colors">
                                  <Checkbox
                                    id="prelevementSEPA"
                                    checked={formData.prelevementSEPA}
                                    onCheckedChange={(checked) =>
                                      handleInputChange("prelevementSEPA", checked as boolean)
                                    }
                                    className="border-violet-300 data-[state=checked]:bg-violet-600"
                                  />
                                  <Label htmlFor="prelevementSEPA" className="text-sm font-medium cursor-pointer">
                                    Prélèvement SEPA
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-3 p-3 rounded-lg border border-violet-200 hover:bg-violet-50 transition-colors">
                                  <Checkbox
                                    id="dureeLibre"
                                    checked={formData.dureeLibre}
                                    onCheckedChange={(checked) => handleInputChange("dureeLibre", checked as boolean)}
                                    className="border-violet-300 data-[state=checked]:bg-violet-600"
                                  />
                                  <Label htmlFor="dureeLibre" className="text-sm font-medium cursor-pointer">
                                    Durée libre
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-3 p-3 rounded-lg border border-violet-200 hover:bg-violet-50 transition-colors">
                                  <Checkbox
                                    id="paiementFractionne"
                                    checked={formData.paiementFractionne}
                                    onCheckedChange={(checked) =>
                                      handleInputChange("paiementFractionne", checked as boolean)
                                    }
                                    className="border-violet-300 data-[state=checked]:bg-violet-600"
                                  />
                                  <Label htmlFor="paiementFractionne" className="text-sm font-medium cursor-pointer">
                                    Paiement fractionné (3 an règle en X fois)
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-3 p-3 rounded-lg border border-violet-200 hover:bg-violet-50 transition-colors">
                                  <Checkbox
                                    id="cheques"
                                    checked={formData.cheques}
                                    onCheckedChange={(checked) => handleInputChange("cheques", checked as boolean)}
                                    className="border-violet-300 data-[state=checked]:bg-violet-600"
                                  />
                                  <Label htmlFor="cheques" className="text-sm font-medium cursor-pointer">
                                    Chèques
                                  </Label>
                                </div>
                              </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                              <div className="space-y-3">
                                <Label htmlFor="pspActuel" className="text-sm font-medium text-gray-700">
                                  Quels solutions de paiements actuels ? (PSP utilisé)
                                </Label>
                                <Input
                                  id="pspActuel"
                                  value={formData.pspActuel}
                                  onChange={(e) => handleInputChange("pspActuel", e.target.value)}
                                  className="border-violet-200 focus:border-violet-400 focus:ring-violet-400 rounded-lg transition-colors"
                                  placeholder="Ex: Stripe, PayPal, Worldline"
                                />
                              </div>
                              <div className="space-y-3">
                                <Label
                                  htmlFor="politiqueRejetPrelevements"
                                  className="text-sm font-medium text-gray-700"
                                >
                                  Politique des rejets de prélèvements ?
                                </Label>
                                <Textarea
                                  id="politiqueRejetPrelevements"
                                  value={formData.politiqueRejetPrelevements}
                                  onChange={(e) => handleInputChange("politiqueRejetPrelevements", e.target.value)}
                                  className="border-violet-200 focus:border-violet-400 focus:ring-violet-400 rounded-lg transition-colors"
                                  rows={3}
                                  placeholder="Décrivez la politique de gestion des rejets"
                                />
                              </div>
                            </div>

                            <div className="p-4 rounded-lg border border-violet-200 bg-violet-50">
                              <div className="flex items-center space-x-3">
                                <Checkbox
                                  id="horsPrixTutar"
                                  checked={formData.horsPrixTutar}
                                  onCheckedChange={(checked) => handleInputChange("horsPrixTutar", checked as boolean)}
                                  className="border-violet-300 data-[state=checked]:bg-violet-600"
                                />
                                <Label htmlFor="horsPrixTutar" className="text-sm font-medium cursor-pointer">
                                  Hors prix tutar, y aura-t-il des règlements en attente à la migration ?
                                </Label>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* Mode de fonctionnement Tab */}
                    <TabsContent value="fonctionnement" className="space-y-6">
                      <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-indigo-50/50">
                        <CardHeader className="pb-6">
                          <CardTitle className="flex items-center gap-3 text-xl text-indigo-800">
                            <Settings className="h-5 w-5" />
                            Mode de fonctionnement
                          </CardTitle>
                          <CardDescription className="text-gray-600">
                            Fonctionnalités et services proposés
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {[
                              { id: "portage", label: "Portage" },
                              { id: "vpc", label: "VPC" },
                              { id: "gestionFraisPort", label: "Gestion de frais de port" },
                              { id: "gestionAdministration", label: "Gestion administration (Chorus)" },
                              { id: "gestionGratuits", label: "Gestion des gratuits (attributeurs)" },
                              { id: "gestionNPAI", label: "Gestion des NPAI" },
                              { id: "gestionRemises", label: "Gestion des remises" },
                              { id: "offresExemplaires", label: "Offres à exemplaires multiples" },
                              { id: "suspensionsTemporaires", label: "Gestion des suspensions temporaires" },
                              { id: "suspensionsDefinitives", label: "Gestion des suspensions définitives" },
                              { id: "gestionRelances", label: "Gestion des relances" },
                              { id: "gestionPrimes", label: "Gestion des primes" },
                              { id: "gestionGraciesCopies", label: "Gestion des grâces copies" },
                              { id: "gestionParrainage", label: "Gestion du parrainage" },
                              { id: "abonnementsConsommation", label: "Abonnements à la consommation" },
                              { id: "transmissionFichiers", label: "Transmission de fichiers PQN" },
                              { id: "gestionEditions", label: "Gestion des éditions" },
                            ].map((item) => (
                              <div
                                key={item.id}
                                className="flex items-center space-x-3 p-3 rounded-lg border border-indigo-200 hover:bg-indigo-50 transition-colors"
                              >
                                <Checkbox
                                  id={item.id}
                                  checked={formData[item.id as keyof QualificationData] as boolean}
                                  onCheckedChange={(checked) =>
                                    handleInputChange(item.id as keyof QualificationData, checked as boolean)
                                  }
                                  className="border-indigo-300 data-[state=checked]:bg-indigo-600"
                                />
                                <Label htmlFor={item.id} className="text-sm font-medium cursor-pointer">
                                  {item.label}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* Solution logicielle Tab */}
                    <TabsContent value="solution" className="space-y-6">
                      <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-violet-50/50">
                        <CardHeader className="pb-6">
                          <CardTitle className="flex items-center gap-3 text-xl text-violet-800">
                            <Database className="h-5 w-5" />
                            Solution logicielle Éditeur actuelle
                          </CardTitle>
                          <CardDescription className="text-gray-600">
                            Système actuel et données à migrer
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-3">
                              <Label htmlFor="systemeActuel" className="text-sm font-medium text-gray-700">
                                Système actuel
                              </Label>
                              <Input
                                id="systemeActuel"
                                value={formData.systemeActuel}
                                onChange={(e) => handleInputChange("systemeActuel", e.target.value)}
                                className="border-violet-200 focus:border-violet-400 focus:ring-violet-400 rounded-lg transition-colors"
                                placeholder="Nom du système actuel"
                              />
                            </div>
                            <div className="space-y-3">
                              <Label htmlFor="optInOptOut" className="text-sm font-medium text-gray-700">
                                Opt-in / Opt-out à reprendre ?
                              </Label>
                              <Select onValueChange={(value) => handleInputChange("optInOptOut", value)}>
                                <SelectTrigger className="border-violet-200 focus:border-violet-400 rounded-lg transition-colors">
                                  <SelectValue placeholder="Sélectionner" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="opt-in">Opt-in</SelectItem>
                                  <SelectItem value="opt-out">Opt-out</SelectItem>
                                  <SelectItem value="les-deux">Les deux</SelectItem>
                                  <SelectItem value="aucun">Aucun</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-3">
                              <Label htmlFor="nbAdressesTotal" className="text-sm font-medium text-gray-700">
                                Nb d'adresses total
                              </Label>
                              <Input
                                id="nbAdressesTotal"
                                value={formData.nbAdressesTotal}
                                onChange={(e) => handleInputChange("nbAdressesTotal", e.target.value)}
                                className="border-violet-200 focus:border-violet-400 focus:ring-violet-400 rounded-lg transition-colors"
                                placeholder="Nombre total d'adresses"
                              />
                            </div>
                            <div className="space-y-3">
                              <Label htmlFor="nbAbonnementsTotal" className="text-sm font-medium text-gray-700">
                                Nb d'abonnements total
                              </Label>
                              <Input
                                id="nbAbonnementsTotal"
                                value={formData.nbAbonnementsTotal}
                                onChange={(e) => handleInputChange("nbAbonnementsTotal", e.target.value)}
                                className="border-violet-200 focus:border-violet-400 focus:ring-violet-400 rounded-lg transition-colors"
                                placeholder="Nombre total d'abonnements"
                              />
                            </div>
                          </div>

                          <div className="space-y-4">
                            {[
                              { id: "souhaitGarderNumeroClients", label: "Souhait de garder les n° clients" },
                              { id: "historiquesSouhaites", label: "Historique souhaité ?" },
                              { id: "repriseHelpDesk", label: "Reprise de données HelpDesk à prévoir ? (ticketing)" },
                              { id: "qualifiantsMarketing", label: "Qualifiants marketing à reprendre ?" },
                            ].map((item) => (
                              <div
                                key={item.id}
                                className="flex items-center space-x-3 p-3 rounded-lg border border-violet-200 hover:bg-violet-50 transition-colors"
                              >
                                <Checkbox
                                  id={item.id}
                                  checked={formData[item.id as keyof QualificationData] as boolean}
                                  onCheckedChange={(checked) =>
                                    handleInputChange(item.id as keyof QualificationData, checked as boolean)
                                  }
                                  className="border-violet-300 data-[state=checked]:bg-violet-600"
                                />
                                <Label htmlFor={item.id} className="text-sm font-medium cursor-pointer">
                                  {item.label}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* Urbanisation SI Tab */}
                    <TabsContent value="urbanisation" className="space-y-6">
                      <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-violet-50/50">
                        <CardHeader className="pb-6">
                          <CardTitle className="flex items-center gap-3 text-xl text-violet-800">
                            <Network className="h-5 w-5" />
                            Urbanisation SI
                          </CardTitle>
                          <CardDescription className="text-gray-600">
                            Intégrations et connexions système
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="space-y-4">
                            <div className="space-y-3">
                              <Label htmlFor="applicationsConnexion" className="text-sm font-medium text-gray-700">
                                Applications à connecter au système d'abonnements
                              </Label>
                              <Textarea
                                id="applicationsConnexion"
                                value={formData.applicationsConnexion}
                                onChange={(e) => handleInputChange("applicationsConnexion", e.target.value)}
                                className="border-violet-200 focus:border-violet-400 focus:ring-violet-400 rounded-lg transition-colors"
                                rows={3}
                                placeholder="Listez les applications à connecter"
                              />
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                              {[
                                {
                                  id: "logicielReporting",
                                  label: "Logiciel BI (reporting)",
                                  placeholder: "Ex: Power BI, Tableau",
                                },
                                {
                                  id: "baseClientCentralisee",
                                  label: "Base client centralisée",
                                  placeholder: "Nom de la base",
                                },
                                {
                                  id: "ldapCrm",
                                  label: "LDAP (connexion à un CRM éditeur)",
                                  placeholder: "Système LDAP",
                                },
                                {
                                  id: "systemeFacturation",
                                  label: "Système de facturation",
                                  placeholder: "Ex: SAP, Sage",
                                },
                                {
                                  id: "systemeComptabilite",
                                  label: "Système de comptabilité",
                                  placeholder: "Logiciel comptable",
                                },
                                {
                                  id: "systemeGestionStocks",
                                  label: "Système de gestion des stocks",
                                  placeholder: "ERP/WMS",
                                },
                                { id: "emailing", label: "Emailing", placeholder: "Ex: Mailchimp, Sendinblue" },
                              ].map((field) => (
                                <div key={field.id} className="space-y-3">
                                  <Label htmlFor={field.id} className="text-sm font-medium text-gray-700">
                                    {field.label}
                                  </Label>
                                  <Input
                                    id={field.id}
                                    value={formData[field.id as keyof QualificationData] as string}
                                    onChange={(e) =>
                                      handleInputChange(field.id as keyof QualificationData, e.target.value)
                                    }
                                    className="border-violet-200 focus:border-violet-400 focus:ring-violet-400 rounded-lg transition-colors"
                                    placeholder={field.placeholder}
                                  />
                                </div>
                              ))}
                            </div>

                            <div className="p-4 rounded-lg border border-violet-200 bg-violet-50">
                              <Label className="text-base font-semibold text-gray-800 mb-4 block">
                                Données à produire régulièrement
                              </Label>
                              <div className="grid gap-4 md:grid-cols-2">
                                {[
                                  { id: "listeClients", label: "Liste de clients / abonnements" },
                                  { id: "listeControles", label: "Liste de contrôles" },
                                  { id: "statistiques", label: "Statistiques" },
                                  { id: "exportDivers", label: "Export divers" },
                                ].map((field) => (
                                  <div key={field.id} className="space-y-2">
                                    <Label htmlFor={field.id} className="text-sm font-medium text-gray-700">
                                      {field.label}
                                    </Label>
                                    <Input
                                      id={field.id}
                                      value={formData[field.id as keyof QualificationData] as string}
                                      onChange={(e) =>
                                        handleInputChange(field.id as keyof QualificationData, e.target.value)
                                      }
                                      className="border-violet-200 focus:border-violet-400 focus:ring-violet-400 rounded-lg transition-colors"
                                      placeholder="Fréquence et format"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="p-4 rounded-lg border border-violet-200 bg-violet-50">
                              <div className="flex items-center space-x-3">
                                <Checkbox
                                  id="connecteursWebService"
                                  checked={formData.connecteursWebService}
                                  onCheckedChange={(checked) =>
                                    handleInputChange("connecteursWebService", checked as boolean)
                                  }
                                  className="border-violet-300 data-[state=checked]:bg-violet-600"
                                />
                                <Label htmlFor="connecteursWebService" className="text-sm font-medium cursor-pointer">
                                  Connecteurs Web Service à prévoir ?
                                </Label>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* Boutique Tab */}
                    <TabsContent value="boutique" className="space-y-6">
                      <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-indigo-50/50">
                        <CardHeader className="pb-6">
                          <CardTitle className="flex items-center gap-3 text-xl text-indigo-800">
                            <ShoppingCart className="h-5 w-5" />
                            Boutique
                          </CardTitle>
                          <CardDescription className="text-gray-600">E-commerce et vente en ligne</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-3">
                              <Label htmlFor="boutiquesEditeur" className="text-sm font-medium text-gray-700">
                                Boutiques propres à l'éditeur ou doit être prise en charge par TBS
                              </Label>
                              <Textarea
                                id="boutiquesEditeur"
                                value={formData.boutiquesEditeur}
                                onChange={(e) => handleInputChange("boutiquesEditeur", e.target.value)}
                                className="border-indigo-200 focus:border-indigo-400 focus:ring-indigo-400 rounded-lg transition-colors"
                                rows={3}
                                placeholder="Décrivez la situation des boutiques"
                              />
                            </div>
                            <div className="space-y-3">
                              <Label htmlFor="nbBoutiquesActuelles" className="text-sm font-medium text-gray-700">
                                Nb de boutiques actuelles
                              </Label>
                              <Input
                                id="nbBoutiquesActuelles"
                                value={formData.nbBoutiquesActuelles}
                                onChange={(e) => handleInputChange("nbBoutiquesActuelles", e.target.value)}
                                className="border-indigo-200 focus:border-indigo-400 focus:ring-indigo-400 rounded-lg transition-colors"
                                placeholder="Nombre de boutiques"
                              />
                            </div>
                            <div className="space-y-3">
                              <Label htmlFor="moyenPaiementBoutiques" className="text-sm font-medium text-gray-700">
                                Moyen de paiement via les boutiques
                              </Label>
                              <Input
                                id="moyenPaiementBoutiques"
                                value={formData.moyenPaiementBoutiques}
                                onChange={(e) => handleInputChange("moyenPaiementBoutiques", e.target.value)}
                                className="border-indigo-200 focus:border-indigo-400 focus:ring-indigo-400 rounded-lg transition-colors"
                                placeholder="Ex: CB, PayPal, Virement"
                              />
                            </div>
                            <div className="space-y-3">
                              <Label htmlFor="numeriques" className="text-sm font-medium text-gray-700">
                                Numériques (Paywall, porte monnaie électronique, inscription newsletter...)
                              </Label>
                              <Textarea
                                id="numeriques"
                                value={formData.numeriques}
                                onChange={(e) => handleInputChange("numeriques", e.target.value)}
                                className="border-indigo-200 focus:border-indigo-400 focus:ring-indigo-400 rounded-lg transition-colors"
                                rows={3}
                                placeholder="Décrivez les services numériques"
                              />
                            </div>
                          </div>

                          <div className="p-4 rounded-lg border border-indigo-200 bg-indigo-50">
                            <div className="flex items-center space-x-3">
                              <Checkbox
                                id="espaceClientEnLigne"
                                checked={formData.espaceClientEnLigne}
                                onCheckedChange={(checked) =>
                                  handleInputChange("espaceClientEnLigne", checked as boolean)
                                }
                                className="border-indigo-300 data-[state=checked]:bg-indigo-600"
                              />
                              <Label htmlFor="espaceClientEnLigne" className="text-sm font-medium cursor-pointer">
                                Espace self care (compte client en ligne)
                              </Label>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </TabsContent>

                {/* Gestion Relation Client Tab */}
                <TabsContent value="relation-client" className="space-y-6">
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-violet-50/50">
                    <CardHeader className="pb-6">
                      <CardTitle className="flex items-center gap-3 text-xl text-violet-800">
                        <Phone className="h-5 w-5" />
                        Gestion Relation Client
                      </CardTitle>
                      <CardDescription className="text-gray-600">Volume et types de contacts clients</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      {/* Appels entrants */}
                      <div className="p-6 rounded-xl border border-violet-200 bg-gradient-to-r from-violet-50 to-purple-50">
                        <h4 className="text-lg font-semibold mb-6 text-violet-800 flex items-center gap-2">
                          <Phone className="h-5 w-5" />
                          Appels entrants
                        </h4>
                        <div className="grid gap-4 md:grid-cols-2">
                          {[
                            { id: "nombreAppelsParAn", label: "Nombre d'appels par an", placeholder: "Ex: 5000" },
                            { id: "motifAppels", label: "Motif des appels", placeholder: "Principaux motifs" },
                            {
                              id: "changementsAdresseAppels",
                              label: "Changements d'adresse / suspension",
                              placeholder: "Nombre ou %",
                            },
                            {
                              id: "nonReceptionPortageAppels",
                              label: "Non réception / portage",
                              placeholder: "Nombre ou %",
                            },
                            {
                              id: "nonReceptionPosteAppels",
                              label: "Non réception / Poste",
                              placeholder: "Nombre ou %",
                            },
                            {
                              id: "retardAbonnementAppels",
                              label: "Retard de mise en place",
                              placeholder: "Nombre ou %",
                            },
                            {
                              id: "problemeAccesNumeriqueAppels",
                              label: "Problème d'accès numérique",
                              placeholder: "Nombre ou %",
                            },
                            { id: "diversAppels", label: "Divers", placeholder: "Autres motifs" },
                          ].map((field) => (
                            <div key={field.id} className="space-y-2">
                              <Label htmlFor={field.id} className="text-sm font-medium text-gray-700">
                                {field.label}
                              </Label>
                              <Input
                                id={field.id}
                                value={formData[field.id as keyof QualificationData] as string}
                                onChange={(e) => handleInputChange(field.id as keyof QualificationData, e.target.value)}
                                className="border-violet-200 focus:border-violet-400 focus:ring-violet-400 rounded-lg transition-colors"
                                placeholder={field.placeholder}
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Mails entrants */}
                      <div className="p-6 rounded-xl border border-purple-200 bg-gradient-to-r from-purple-50 to-violet-50">
                        <h4 className="text-lg font-semibold mb-6 text-purple-800 flex items-center gap-2">
                          <Mail className="h-5 w-5" />
                          Mails entrants
                        </h4>
                        <div className="grid gap-4 md:grid-cols-2">
                          {[
                            { id: "nombreMailsParAn", label: "Nombre de mails par an", placeholder: "Ex: 3000" },
                            { id: "motifMails", label: "Motif des mails", placeholder: "Principaux motifs" },
                            {
                              id: "changementsAdresseMails",
                              label: "Changements d'adresse / suspension",
                              placeholder: "Nombre ou %",
                            },
                            {
                              id: "nonReceptionPortageMails",
                              label: "Non réception / portage",
                              placeholder: "Nombre ou %",
                            },
                            {
                              id: "nonReceptionPosteMails",
                              label: "Non réception / Poste",
                              placeholder: "Nombre ou %",
                            },
                            {
                              id: "retardAbonnementMails",
                              label: "Retard de mise en place",
                              placeholder: "Nombre ou %",
                            },
                            {
                              id: "problemeAccesNumeriqueMails",
                              label: "Problème d'accès numérique",
                              placeholder: "Nombre ou %",
                            },
                            { id: "diversMails", label: "Divers", placeholder: "Autres motifs" },
                          ].map((field) => (
                            <div key={field.id} className="space-y-2">
                              <Label htmlFor={field.id} className="text-sm font-medium text-gray-700">
                                {field.label}
                              </Label>
                              <Input
                                id={field.id}
                                value={formData[field.id as keyof QualificationData] as string}
                                onChange={(e) => handleInputChange(field.id as keyof QualificationData, e.target.value)}
                                className="border-purple-200 focus:border-purple-400 focus:ring-purple-400 rounded-lg transition-colors"
                                placeholder={field.placeholder}
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Courriers entrants */}
                      <div className="p-6 rounded-xl border border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50">
                        <h4 className="text-lg font-semibold mb-6 text-indigo-800 flex items-center gap-2">
                          <FileText className="h-5 w-5" />
                          Courriers entrants
                        </h4>
                        <div className="grid gap-4 md:grid-cols-2">
                          {[
                            {
                              id: "nombreCourriersParAn",
                              label: "Nombre de courriers par an",
                              placeholder: "Ex: 1000",
                            },
                            { id: "motifCourriers", label: "Motif des courriers", placeholder: "Principaux motifs" },
                            {
                              id: "changementsAdresseCourriers",
                              label: "Changements d'adresse / suspension",
                              placeholder: "Nombre ou %",
                            },
                            {
                              id: "nonReceptionPortageCourriers",
                              label: "Non réception / portage",
                              placeholder: "Nombre ou %",
                            },
                            {
                              id: "nonReceptionPosteCourriers",
                              label: "Non réception / Poste",
                              placeholder: "Nombre ou %",
                            },
                            {
                              id: "retardAbonnementCourriers",
                              label: "Retard de mise en place",
                              placeholder: "Nombre ou %",
                            },
                            {
                              id: "problemeAccesNumeriqueCourriers",
                              label: "Problème d'accès numérique",
                              placeholder: "Nombre ou %",
                            },
                            { id: "diversCourriers", label: "Divers", placeholder: "Autres motifs" },
                          ].map((field) => (
                            <div key={field.id} className="space-y-2">
                              <Label htmlFor={field.id} className="text-sm font-medium text-gray-700">
                                {field.label}
                              </Label>
                              <Input
                                id={field.id}
                                value={formData[field.id as keyof QualificationData] as string}
                                onChange={(e) => handleInputChange(field.id as keyof QualificationData, e.target.value)}
                                className="border-indigo-200 focus:border-indigo-400 focus:ring-indigo-400 rounded-lg transition-colors"
                                placeholder={field.placeholder}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Fulfillment Tab */}
                <TabsContent value="fulfillment" className="space-y-6">
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-emerald-50/50">
                    <CardHeader className="pb-6">
                      <CardTitle className="flex items-center gap-3 text-xl text-emerald-800">
                        <Package className="h-5 w-5" />
                        Gestion des Abonnements
                      </CardTitle>
                      <CardDescription className="text-gray-600">Volumes et processus de fulfillment</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      {/* Caractéristiques générales */}
                      <div className="p-6 rounded-xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50">
                        <h4 className="text-lg font-semibold mb-6 text-emerald-800 flex items-center gap-2">
                          <Package className="h-5 w-5" />
                          Caractéristiques générales
                        </h4>
                        <div className="grid gap-4 md:grid-cols-2">
                          {[
                            { id: "nbNumeroParAn", label: "Nb de N°/an", placeholder: "Ex: 12, 52" },
                            {
                              id: "nbAbonnesPapierActifs",
                              label: "Nb d'abonnés papier actifs",
                              placeholder: "Nombre d'abonnés",
                            },
                            { id: "nbAbonnesPortes", label: "Dont abonnés portés", placeholder: "Nombre portés" },
                            {
                              id: "nbAbonnesNumeriques",
                              label: "Nb d'abonnés numériques",
                              placeholder: "Abonnés numériques",
                            },
                            {
                              id: "nbAbonnesCouplesPapier",
                              label: "Dont abonnés couplés papier",
                              placeholder: "Couplés papier",
                            },
                            {
                              id: "nbAbonnesInactifsProspects",
                              label: "Nb d'abonnés inactifs et prospects",
                              placeholder: "Inactifs/prospects",
                            },
                          ].map((field) => (
                            <div key={field.id} className="space-y-2">
                              <Label htmlFor={field.id} className="text-sm font-medium text-gray-700">
                                {field.label}
                              </Label>
                              <Input
                                id={field.id}
                                value={formData[field.id as keyof QualificationData] as string}
                                onChange={(e) => handleInputChange(field.id as keyof QualificationData, e.target.value)}
                                className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400 rounded-lg transition-colors"
                                placeholder={field.placeholder}
                              />
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 p-3 rounded-lg border border-emerald-200 bg-emerald-50">
                          <div className="flex items-center space-x-3">
                            <Checkbox
                              id="presenceHorsSerie"
                              checked={formData.presenceHorsSerie}
                              onCheckedChange={(checked) => handleInputChange("presenceHorsSerie", checked as boolean)}
                              className="border-emerald-300 data-[state=checked]:bg-emerald-600"
                            />
                            <Label htmlFor="presenceHorsSerie" className="text-sm font-medium cursor-pointer">
                              Présence de Hors-série
                            </Label>
                          </div>
                        </div>
                      </div>

                      {/* Relances de réabonnement */}
                      <div className="p-6 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
                        <h4 className="text-lg font-semibold mb-6 text-blue-800 flex items-center gap-2">
                          <Mail className="h-5 w-5" />
                          Relances de réabonnement
                        </h4>
                        <div className="grid gap-4 md:grid-cols-2 mb-4">
                          {[
                            { id: "relancesParPoste", label: "Expédiées par poste" },
                            { id: "relancesAvecJournal", label: "Expédiées avec le journal" },
                            { id: "relancesParEmail", label: "Expédiées par e-mail" },
                            { id: "relancesParSMS", label: "Expédiées par SMS" },
                          ].map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center space-x-3 p-3 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors"
                            >
                              <Checkbox
                                id={item.id}
                                checked={formData[item.id as keyof QualificationData] as boolean}
                                onCheckedChange={(checked) =>
                                  handleInputChange(item.id as keyof QualificationData, checked as boolean)
                                }
                                className="border-blue-300 data-[state=checked]:bg-blue-600"
                              />
                              <Label htmlFor={item.id} className="text-sm font-medium cursor-pointer">
                                {item.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="typeRelancesPapier" className="text-sm font-medium text-gray-700">
                            Type de relances papier
                          </Label>
                          <Input
                            id="typeRelancesPapier"
                            value={formData.typeRelancesPapier}
                            onChange={(e) => handleInputChange("typeRelancesPapier", e.target.value)}
                            className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 rounded-lg transition-colors"
                            placeholder="Décrivez les types de relances"
                          />
                        </div>
                      </div>

                      {/* Fulfillment */}
                      <div className="p-6 rounded-xl border border-violet-200 bg-gradient-to-r from-violet-50 to-purple-50">
                        <h4 className="text-lg font-semibold mb-6 text-violet-800 flex items-center gap-2">
                          <CreditCard className="h-5 w-5" />
                          Fulfillment
                        </h4>
                        <div className="grid gap-4 md:grid-cols-2">
                          {[
                            {
                              id: "nbCreationsBulletinPapier",
                              label: "NB de créations par bulletin papier/an",
                              placeholder: "Créations annuelles",
                            },
                            {
                              id: "nbReabonnementBulletinPapier",
                              label: "NB de réabonnement par bulletin papier/an",
                              placeholder: "Réabonnements annuels",
                            },
                            {
                              id: "nbAbonnesPrelevementSEPA",
                              label: "NB abonnés en prélèvement SEPA",
                              placeholder: "Abonnés SEPA",
                            },
                            {
                              id: "frequencePrelevements",
                              label: "Fréquences des prélèvements",
                              placeholder: "Ex: Mensuel, Trimestriel",
                            },
                            {
                              id: "nbCartesBancaires",
                              label: "NB de cartes bancaires traitées/an",
                              placeholder: "CB annuelles",
                            },
                            {
                              id: "nbChequesEncaisses",
                              label: "Nb de chèques encaissés/an",
                              placeholder: "Chèques annuels",
                            },
                            {
                              id: "frequenceRemiseCheques",
                              label: "Fréquence des remises en banque",
                              placeholder: "Ex: Hebdomadaire",
                            },
                            {
                              id: "nbAbonnementsLigne",
                              label: "NB d'abonnements souscrits en ligne/an",
                              placeholder: "Souscriptions en ligne",
                            },
                            { id: "nbCommandesVPC", label: "NB commandes VPC", placeholder: "Commandes VPC" },
                            {
                              id: "nbCommandesPapier",
                              label: "NB de commandes papier traitées/an",
                              placeholder: "Commandes papier",
                            },
                          ].map((field) => (
                            <div key={field.id} className="space-y-2">
                              <Label htmlFor={field.id} className="text-sm font-medium text-gray-700">
                                {field.label}
                              </Label>
                              <Input
                                id={field.id}
                                value={formData[field.id as keyof QualificationData] as string}
                                onChange={(e) => handleInputChange(field.id as keyof QualificationData, e.target.value)}
                                className="border-violet-200 focus:border-violet-400 focus:ring-violet-400 rounded-lg transition-colors"
                                placeholder={field.placeholder}
                              />
                            </div>
                          ))}
                        </div>
                        <div className="space-y-3 mt-4">
                          <Label htmlFor="bulletinsQualifications" className="text-sm font-medium text-gray-700">
                            Les bulletins d'abonnement comportent certaines qualifications à saisir
                          </Label>
                          <Textarea
                            id="bulletinsQualifications"
                            value={formData.bulletinsQualifications}
                            onChange={(e) => handleInputChange("bulletinsQualifications", e.target.value)}
                            className="border-violet-200 focus:border-violet-400 focus:ring-violet-400 rounded-lg transition-colors"
                            rows={3}
                            placeholder="Décrivez les qualifications à saisir"
                          />
                        </div>
                      </div>

                      {/* Divers */}
                      <div className="p-6 rounded-xl border border-gray-200 bg-gradient-to-r from-gray-50 to-slate-50">
                        <h4 className="text-lg font-semibold mb-6 text-gray-800 flex items-center gap-2">
                          <Settings className="h-5 w-5" />
                          Divers
                        </h4>
                        <div className="space-y-4 mb-4">
                          {[
                            { id: "editionsMultiples", label: "Éditions multiples pour une même parution" },
                            { id: "abonnementsElectroniquesCouples", label: "Abonnements électroniques couplés" },
                            {
                              id: "abonnementsElectroniquesNonCouples",
                              label: "Abonnements électroniques non couplés",
                            },
                          ].map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                            >
                              <Checkbox
                                id={item.id}
                                checked={formData[item.id as keyof QualificationData] as boolean}
                                onCheckedChange={(checked) =>
                                  handleInputChange(item.id as keyof QualificationData, checked as boolean)
                                }
                                className="border-gray-300 data-[state=checked]:bg-gray-600"
                              />
                              <Label htmlFor={item.id} className="text-sm font-medium cursor-pointer">
                                {item.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-3">
                            <Label htmlFor="portage" className="text-sm font-medium text-gray-700">
                              Portage
                            </Label>
                            <Input
                              id="portage"
                              value={formData.portage}
                              onChange={(e) => handleInputChange("portage", e.target.value)}
                              className="border-gray-200 focus:border-gray-400 focus:ring-gray-400 rounded-lg transition-colors"
                              placeholder="Informations sur le portage"
                            />
                          </div>
                          <div className="space-y-3">
                            <Label htmlFor="frequenceTirages" className="text-sm font-medium text-gray-700">
                              Fréquence des tirages
                            </Label>
                            <Input
                              id="frequenceTirages"
                              value={formData.frequenceTirages}
                              onChange={(e) => handleInputChange("frequenceTirages", e.target.value)}
                              className="border-gray-200 focus:border-gray-400 focus:ring-gray-400 rounded-lg transition-colors"
                              placeholder="Ex: Quotidien, Hebdomadaire"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Action buttons */}
                <div className="flex gap-4 pt-8">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-lg rounded-lg py-3 text-lg font-medium transition-all duration-200"
                  >
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Générer la synthèse
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={resetForm}
                    className="border-violet-200 text-violet-700 hover:bg-violet-50 shadow-lg rounded-lg py-3 px-6 bg-white/80"
                  >
                    Réinitialiser
                  </Button>
                </div>
              </Tabs>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
