'use client';

import { motion } from 'framer-motion';
import { Shield, AlertCircle, Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const translations = {
  en: {
    title: "Terms of Service",
    lastUpdated: "Last Updated: January 1, 2026",
    backToHome: "Back to Home",
    intro: "Welcome to Maya Bot. By using our Discord bot, you agree to comply with and be bound by the following terms and conditions of use.",
    sections: [
      {
        title: "1. Acceptance of Terms",
        content: "By accessing and using Maya Bot, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use our service."
      },
      {
        title: "2. Usage Guidelines",
        content: "Users must use Maya Bot in accordance with Discord's Terms of Service and Community Guidelines. Any violation of Discord's rules while using Maya Bot may result in immediate termination of access to our services."
      },
      {
        title: "3. User Conduct",
        content: "Users are expected to behave respectfully and appropriately. Harassment, hate speech, spam, or any form of abusive behavior will not be tolerated and may result in a permanent ban."
      },
      {
        title: "4. Music Content",
        content: "Maya Bot provides music playback through third-party services. Users should be aware that copyright laws apply to all content played through our bot. Maya Bot is not responsible for the content of the music played."
      },
      {
        title: "5. Service Availability",
        content: "We strive to maintain 99.9% uptime. However, we do not guarantee uninterrupted access to our services. We reserve the right to modify, suspend, or discontinue the service at any time."
      },
      {
        title: "6. Privacy and Data",
        content: "We collect minimal data necessary to operate our services. Your privacy is important to us. Please review our Privacy Policy for detailed information about data collection and usage."
      },
      {
        title: "7. Disclaimer of Warranties",
        content: "Maya Bot is provided 'as is' without any warranties, expressed or implied. We do not warrant that the service will be uninterrupted, timely, secure, or error-free."
      },
      {
        title: "8. Limitation of Liability",
        content: "In no event shall Maya Bot be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to the use of our services."
      },
      {
        title: "9. Termination",
        content: "We reserve the right to terminate or suspend your access to Maya Bot at our sole discretion, without prior notice, for any reason including but not limited to breach of these Terms."
      },
      {
        title: "10. Changes to Terms",
        content: "We reserve the right to modify these terms at any time. It is your responsibility to review these terms periodically. Continued use of the service after changes constitutes acceptance of the new terms."
      },
      {
        title: "11. Contact",
        content: "If you have any questions about these Terms of Service, please contact us through our Discord server or support channels."
      }
    ]
  },
  vi: {
    title: "Điều Khoản Dịch Vụ",
    lastUpdated: "Cập nhật lần cuối: 1 tháng 1, 2026",
    backToHome: "← Quay lại Trang chủ",
    intro: "Chào mừng bạn đến với Maya Bot. Bằng cách sử dụng Discord bot của chúng tôi, bạn đồng ý tuân thủ và bị ràng buộc bởi các điều khoản và điều kiện sử dụng sau đây.",
    sections: [
      {
        title: "1. Chấp Nhận Điều Khoản",
        content: "Bằng cách truy cập và sử dụng Maya Bot, bạn chấp nhận và đồng ý bị ràng buộc bởi các điều khoản và quy định của thỏa thuận này. Nếu bạn không đồng ý tuân thủ các điều khoản này, vui lòng không sử dụng dịch vụ của chúng tôi."
      },
      {
        title: "2. Hướng Dẫn Sử Dụng",
        content: "Người dùng phải sử dụng Maya Bot theo Điều khoản Dịch vụ và Hướng dẫn Cộng đồng của Discord. Bất kỳ vi phạm nào đối với quy tắc của Discord trong khi sử dụng Maya Bot có thể dẫn đến chấm dứt ngay lập tức quyền truy cập vào dịch vụ của chúng tôi."
      },
      {
        title: "3. Ứnh Hành Của Người Dùng",
        content: "Người dùng được kỳ vọng sẽ hành xử một cách tôn trọng và phù hợp. Quấy rối, ngôn từ thù ghét, spam, hoặc bất kỳ hình thức nào của hành vi lạm dụng sẽ không được dung nạp và có thể dẫn đến cấm vĩnh viễn."
      },
      {
        title: "4. Nội Dung Âm Nhạc",
        content: "Maya Bot cung cấp phát nhạc thông qua các dịch vụ bên thứ ba. Người dùng nên lưu ý rằng luật bản quyền áp dụng cho tất cả nội dung được phát qua bot của chúng tôi. Maya Bot không chịu trách nhiệm về nội dung của nhạc được phát."
      },
      {
        title: "5. Khả Năng Dịch Vụ",
        content: "Chúng tôi nỗ lực duy trì thời gian hoạt động 99.9%. Tuy nhiên, chúng tôi không đảm bảo quyền truy cập không bị gián đoạn đến dịch vụ của chúng tôi. Chúng tôi giữ quyền sửa đổi, treo, hoặc ngừng dịch vụ bất cứ lúc nào."
      },
      {
        title: "6. Quyền Riêng Tư và Dữ Liệu",
        content: "Chúng tôi thu thập dữ liệu tối thiểu cần thiết để vận hành dịch vụ. Quyền riêng tư của bạn quan trọng đối với chúng tôi. Vui lòng xem Chính Sách Quyền Riêng Tư của chúng tôi để có thông tin chi tiết về việc thu thập và sử dụng dữ liệu."
      },
      {
        title: "7. Tuyên Bố Từ Chối Bảo Hành",
        content: "Maya Bot được cung cấp 'nguyên trạng' mà không có bất kỳ bảo hành nào, được thể hiện hay ngụ ý. Chúng tôi không bảo hành rằng dịch vụ sẽ không bị gián đoạn, đúng hạn, bảo mật, hoặc không lỗi."
      },
      {
        title: "8. Giới Hạn Trách Nhiệm",
        content: "Trong bất kỳ trường hợp nào, Maya Bot không chịu trách nhiệm cho bất kỳ thiệt hại gián tiếp, ngẫu nhiên, đặc biệt, hậu quả, hoặc trừng phát nào phát sinh từ hoặc liên quan đến việc sử dụng dịch vụ của chúng tôi."
      },
      {
        title: "9. Chấm Dứt",
        content: "Chúng tôi giữ quyền chấm dứt hoặc treo quyền truy cập của bạn vào Maya Bot theo toàn quyết định của chúng tôi, không cần thông báo trước, vì bất kỳ lý do nào bao gồm nhưng không giới hạn vi phạm các Điều khoản này."
      },
      {
        title: "10. Thay Đổi Đối Với Điều Khoản",
        content: "Chúng tôi giữ quyền sửa đổi các điều khoản này bất cứ lúc nào. Đây là trách nhiệm của bạn để xem xét các điều khoản định kỳ. Việc tiếp tục sử dụng dịch vụ sau khi thay đổi cấu thành chấp nhận các điều khoản mới."
      },
      {
        title: "11. Liên Hệ",
        content: "Nếu bạn có bất kỳ câu hỏi nào về Điều khoản Dịch vụ này, vui lòng liên hệ với chúng tôi qua máy chủ Discord hoặc kênh hỗ trợ."
      }
    ]
  },
  hi: {
    title: "सेवा और शर्ते",
    lastUpdated: "अंतिम अपडेट: 1 जनवरी 2026",
    backToHome: "← होम पर वापस",
    intro: "माया बॉट में आपका स्वागत है। हमारे डिस्कॉर्ड बॉट का उपयोग करके, आप निम्नलिखित नियमों और शर्तों का पालन करने और उनसे बंधित होने के लिए सहमत होते हैं।",
    sections: [
      {
        title: "1. नियमों की स्वीकार",
        content: "माया बॉट तक पहुंच और उसका उपयोग करके, आप इस समझौते की नियमों और प्रावधानों से बंधित होने के लिए सहमत होते हैं। यदि आप इन नियमों से सहमत नहीं हैं, तो कृपया हमारी सेवा का उपयोग न करें।"
      },
      {
        title: "2. उपयोग दिशानिर्देश",
        content: "उपयोगकर्ताओं को माया बॉट का उपयोग डिस्कॉर्ड के सेवा नियमों और सामुदायिक दिशानिर्देश के अनुसार करना चाहिए। माया बॉट का उपयोग करते समय डिस्कॉर्ड के किसी भी नियमों का उल्लंघन हमारी सेवाओं तक पहुंच तत्काल बंद किया जा सकता है।"
      },
      {
        title: "3. उपयोगकर्ता आचरण",
        content: "उपयोगकर्ताओं से उम्मीद और उचित व्यवहार की अपेक्षा की जाती है। परेशान, नफरत भाषण, स्पैम या किसी भी दुरुपय व्यवहार को बर्दाश्त नहीं जाएगा और इसके परिणामस्वरूप प्रतिबंधित हो सकता है।"
      },
      {
        title: "4. संगीत सामग्री",
        content: "माया बॉट तीसरे पक्षों के माध्यम से संगीत प्लेबैक प्रदान करता है। उपयोगकर्ताओं को पता होना चाहिए कि सभी सामग्री पर कॉपीराइट कानून लागू होते हैं। माया बॉट चलाए जाने वाले संगीत की सामग्री के लिए जिम्मेदार नहीं है।"
      },
      {
        title: "5. सेवा उपलब्धता",
        content: "हमारा प्रयास 99.9% अपटाइम बनाए रखने का है। हालांकि, हमारी सेवाओं की निरंतर पहुंच की गारंटी नहीं देते। हम किसी भी समय सेवा को संशोधित, निलंबित या बंद करने का अधिकार रखते हैं।"
      },
      {
        title: "6. गोपनीयता और डेटा",
        content: "हम अपनी सेवाओं को संचालित करने के लिए न्यूनतम आवश्यकता डेटा एकत्रित करते हैं। आपकी गोपनीयता हमारे लिए महत्वपूर्ण है। विस्तृत जानकारी के लिए कृपया हमारी गोपनीयता नीति की समीक्षा करें।"
      },
      {
        title: "7. वारंटी अस्वीकरण",
        content: "माया बॉट 'जैसा का है' किसी भी वारंटी, स्पष्ट या निहित के बिना प्रदान किया जाता है। हम यह वारंट नहीं देते कि सेवा निरंतर, समय पर, सुरक्षित या त्रुटि-मुक्त रहेगी।"
      },
      {
        title: "8. दायिती सीमा",
        content: "किसी भी स्थिति में, माया बॉट हमारी सेवाओं के उपयोग से उत्पन्न या संबंधित किसी भी अप्रत्यक्ष, सामयिक, विशेष, परिणामस्वरूप या दंडात्माक नुकसान के लिए उत्तरदायी नहीं होगा।"
      },
      {
        title: "9. समाप्ति",
        content: "हम अपने विवेक पर किसी भी पूर्व सूचना के बिना माया बॉट तक आपकी पहुंच को समाप्त या निलंबित करने का अधिकार रखते हैं, जिसमें इन नियमों के उल्लंघन शामिल है पर इस तक सीमित नहीं।"
      },
      {
        title: "10. नियमों में बदलाव",
        content: "हम किसी भी समय नियमों को संशोधित करने का अधिकार रखते हैं। इन नियमों की आवधृत जांच करना आपकी जिम्मेदारी है। बदलाव के बाद सेवा का निरंतर उपयोग नए नियमों की स्वीकारा है।"
      },
      {
        title: "11. संपर्क",
        content: "यदि आपके सेवा के नियमों के बारे में कोई प्रश्न हैं, तो कृपया हमारे डिस्कॉर्ड सर्वर या सहायता चैनलों के माध्यम से संपर्क करें।"
      }
    ]
  }
};

export default function TOSPage() {
  const { language, setLanguage } = useLanguage();

  const currentTranslations = translations[language as keyof typeof translations] || translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <Button
              variant="outline"
              onClick={() => window.location.href = '/'}
              className="mb-6"
            >
              {currentTranslations.backToHome}
            </Button>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
                  {currentTranslations.title}
                </h1>
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as any)}
                  className="px-4 py-2 rounded-lg border-2 border-purple-300 dark:border-purple-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white cursor-pointer"
                >
                  <option value="en">English</option>
                  <option value="vi">Tiếng Việt</option>
                  <option value="hi">हिंदी</option>
                </select>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {currentTranslations.lastUpdated}
            </p>
          </div>

          <Card className="mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-purple-600" />
                {currentTranslations.intro}
              </CardTitle>
            </CardHeader>
          </Card>

          <div className="space-y-6">
            {currentTranslations.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {section.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="mt-8 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
            <CardContent className="p-6 text-center">
              <AlertCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Questions?
              </h3>
              <p className="opacity-90 mb-4">
                If you have any questions about our Terms of Service, please join our Discord server.
              </p>
              <Button
                variant="outline"
                className="bg-white/20 hover:bg-white/30 text-white border-white"
                onClick={() => window.open('https://discord.gg/TyQbkCVPr6', '_blank')}
              >
                Join Discord Server
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
