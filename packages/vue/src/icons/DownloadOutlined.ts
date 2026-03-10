// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DownloadOutlinedSvg from '@colelab/icons-svg/es/asn/DownloadOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DownloadOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DownloadOutlinedSvg }, slots);
  },
});
