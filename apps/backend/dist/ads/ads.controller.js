"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdsController = void 0;
const common_1 = require("@nestjs/common");
let AdsController = class AdsController {
    ads;
    constructor() {
        this.ads = [
            { adId: 1, clicks: 100, impressions: 10000, cost: 50.0 },
            { adId: 2, clicks: 150, impressions: 2000, cost: 75.0 },
        ];
    }
    getAds(res) {
        try {
            return res.status(common_1.HttpStatus.OK).json(this.ads);
        }
        catch (error) {
            return res
                .status(common_1.HttpStatus.INTERNAL_SERVER_ERROR)
                .json({ message: 'Error fetching ads' });
        }
    }
    addAd(adData, res) {
        const { adId, clicks, impressions, cost } = adData;
        try {
            if (!adId || !clicks || !impressions || !cost) {
                return res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: 'Missing ad data fields' });
            }
            this.ads.push(adData);
            return res.status(common_1.HttpStatus.CREATED).json({ message: 'Ad added successfully', ad: adData });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error adding ad' });
        }
    }
};
exports.AdsController = AdsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdsController.prototype, "getAds", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AdsController.prototype, "addAd", null);
exports.AdsController = AdsController = __decorate([
    (0, common_1.Controller)('/ads'),
    __metadata("design:paramtypes", [])
], AdsController);
//# sourceMappingURL=ads.controller.js.map